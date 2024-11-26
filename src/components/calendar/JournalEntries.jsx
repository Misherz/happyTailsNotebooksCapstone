import { useState, useEffect } from "react";
import { getEntries, createEntry, updateEntry as updateEntryAPI, deleteEntry as deleteEntryAPI} from '../../utilities/controller.mjs';
import '../../css/myEntriesPg.css'

export default function MyEntries() {
    const [formData, setFormData] = useState({
        mood: '',
        subject: '',
        entry: '',
    });

    const [entries, setEntries] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [entriesPerPage] = useState(2);
    const [showEntries, setShowEntries] = useState(false);
    const [editingEntryId, setEditingEntryId] = useState(null);

    useEffect(() => {
        if (showEntries) {
            getEntries().then(response => {
                console.log(response);
                setEntries(response);
            });
        }
    }, [showEntries]);

    // Getting form input values
    function handleChange(e) {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    }

    // Adding new entry
    function addEntry(e) {
        e.preventDefault();
        console.log('Submitting entry:', formData);
    
        if (formData.entry) {
            const newEntry = {
                mood: formData.mood || "",
                subject: formData.subject || "",
                entry: formData.entry,
                dateSubmitted: Date.now(),
            };
    
            createEntry(newEntry).then(createdEntry => {
                getEntries().then(response => {
                    setEntries(response); 
                });
            
                setFormData({
                    mood: '',
                    subject: '',
                    entry: '',
                });
            
                alert("Entry added!");
            }).catch(err => {
                console.error("Failed to add entry:", err);
            });
        } else {
            alert("Please fill out your journal entry. A minimum of an entry is required.");
        }
    }

    // Edit an entry
    function editEntry(entry) {
        setFormData({
            mood: entry.mood,
            subject: entry.subject,
            entry: entry.entry,
        });
        setEditingEntryId(entry._id);
    }

    //delete entry
    function deleteEntry(entry) {
        console.log("Deleting entry with ID:", entry._id);
        deleteEntryAPI(entry._id).then(() => {
            setEntries(prevEntries => prevEntries.filter(ent => ent._id !== entry._id));
            alert("Entry deleted successfully!");
        }).catch(err => {
            console.error("Failed to delete entry:", err);
            alert("Error deleting entry.");
        });
    }
    
    
    // Update an entry
    function updateEntry(e) {
        e.preventDefault();
        
        const updatedEntry = {
            ...formData,
            dateSubmitted: Date.now(),
        };

        updateEntryAPI(editingEntryId, updatedEntry).then(() => {
          
            getEntries().then(response => {
                setEntries(response); // Update state with the new entries
            });

            setEditingEntryId(null);
            setFormData({
                mood: '',
                subject: '',
                entry: '',
            });

            alert("Entry updated!");
        }).catch(err => {
            console.error("Failed to update entry:", err);
        });
    }

    //Pagination
    function nextPage() {
        if ((currentPage + 1) * entriesPerPage < entries.length) {
            setCurrentPage(currentPage + 1);
        }
    }

    function prevPage() {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    }

    //add new date to ensure it is a date object
    const sortedEntries = [...entries].sort((a, b) => new Date(b.dateSubmitted) - new Date(a.dateSubmitted));


    const currentEntries = sortedEntries.slice(
        currentPage * entriesPerPage,
        (currentPage + 1) * entriesPerPage
    );
    
    return (
        <div className="entries">
            <div className="entriesContainer">
                <div className="entryBox">
                    <h1 className="myEntries">My Entries</h1>
                    <div className="usersInput">
                        <form onSubmit={editingEntryId ? updateEntry : addEntry}>
                            <input
                                className="usersInput"
                                type="text"
                                name="subject"
                                placeholder="Subject"
                                value={formData.subject}
                                onChange={handleChange}
                            />
                            <br />
                            <input
                                className="usersInput"
                                type="text"
                                name="mood"
                                placeholder="Mood"
                                value={formData.mood}
                                onChange={handleChange}
                            />
                            <br />
                            <textarea
                                name="entry"
                                placeholder="Write at least 3-5 sentences of your daily entry"
                                value={formData.entry}
                                onChange={handleChange}
                            />
                            <div className="postBtns">
                                <button type="submit" className="submitBtn">
                                    {editingEntryId ? "Update Entry" : "Submit"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="entriesBlock">
                    <div className="viewEntriesBtn">
                        <button onClick={() => setShowEntries(prev => !prev)} className="viewEntriesBtn">
                            {showEntries ? "Hide Entries" : "View Entries"}
                        </button>
                    </div>

                    {showEntries && (
                        <div className="entriesList">
                            <h2 className="mainHeader">Your Journal Entries</h2>
                            {currentEntries.length > 0 ? (
                                currentEntries.map(entry => (
                                    <div key={entry._id} className="entryCard">
                                        <strong className="entrySubject">{entry.subject}</strong><br /> <strong className="entryMood">{entry.mood}</strong>
                                        <p className="entryTxt">{entry.entry}</p>
                                        <p className="date"><em>{new Date(entry.dateSubmitted).toLocaleString()}</em></p>
                                        <button onClick={() => editEntry(entry)}className="changeBtn">Edit</button>
                                        <button onClick={() => deleteEntry(entry)} className="changeBtn">Delete</button>
                                    </div>
                                ))
                            ) : (
                                <p>No entries yet. Start journaling!</p>
                            )}


                        <div className="paginationBtns">
                            <button
                                type="button"
                                className="prevBtn"
                                onClick={prevPage}
                                disabled={currentPage === 0}
                            >
                                ← Previous
                            </button>
                            <button
                                type="button"
                                className="nextBtn"
                                onClick={nextPage}
                                disabled={currentPage === Math.floor(entries.length / entriesPerPage)}
                            >
                                Next →
                            </button>
                        </div>
                    </div>
                )}
            </div>
            </div>
        </div>
    );
}
