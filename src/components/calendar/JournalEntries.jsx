import { useState } from "react";

export default function MyEntries() {
    const [formData, setFormData] = useState({
        mood: '',
        subject: '',
        entry: '',
    });

    const [entries, setEntries] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [entriesPerPage] = useState(3);
    const [showEntries, setShowEntries] = useState(false); 

    //Getting Values
    function handleChange(e) {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    }

    //adding entries
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

            setEntries(prevEntries => [
                { ...newEntry, id: Date.now() },
                ...prevEntries,
            ]);

            setFormData({
                mood: '',
                subject: '',
                entry: '',
            });

            alert("Submitted! Happy Journaling!"); 
        } else {
            alert("Please fill out your journal entry. A minimum of an entry is required.");
        }
    }

    //next button
    function nextPage() {
        if ((currentPage + 1) * entriesPerPage < entries.length) {
            setCurrentPage(currentPage + 1);
        }
    }

    //previous button
    function prevPage() {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    }

   
    const sortedEntries = [...entries].sort((a, b) => b.dateSubmitted - a.dateSubmitted);

    const currentEntries = sortedEntries.slice(
        currentPage * entriesPerPage,
        (currentPage + 1) * entriesPerPage
    );


    return (
        <div className="entries">
            <div className="entryBox">
                <h1 className="myEntries">My Entries</h1>
                <div className="usersInput">
                    <form onSubmit={addEntry}>
                        <input
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            value={formData.subject}
                            onChange={handleChange}
                        />
                        <br />
                        <input
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
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            <div className="viewEntriesBtn">
                <button onClick={() => setShowEntries(prev => !prev)} className="viewEntriesBtn">
                    {showEntries ? "Hide Entries" : "View Entries"}
                </button>
            </div>

            
            {showEntries && (
                <div className="entriesList">
                    <h2>Your Journal Entries</h2>
                    {currentEntries.length > 0 ? (
                        currentEntries.map(entry => (
                            <div key={entry.id} className="entryCard">
                                <strong>{entry.subject}</strong> - {entry.mood}
                                <p>{entry.entry}</p>
                                <p><em>{new Date(entry.dateSubmitted).toLocaleString()}</em></p>
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
    );
}