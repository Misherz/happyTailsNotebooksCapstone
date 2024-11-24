import { useState } from "react";

export default function MyEntries(){
    const [formData, setFormData] = useState({
        mood: '',
        subject: '',
        entry: '',
    });
  
    const [entries, setEntries] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [submitted, isSubmitted] = useState(false);
    const entriesPerPage = 1;

    function handleChange(e){
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    }


    function addEntry(e){
        e.preventDefault();
        if (formData.entry) {
            const newEntry = {
                mood: formData.mood || "",
                subject: formData.subject || "",
                entry: formData.entry,
            };

            setEntries(prevEntries => [
                { ...newEntry, id: Date.now() },
                ...prevEntries,
            ]);

            setFormData({
                mood: '',
                subject: '',
                entry: ''
            });
            isSubmitted(true);

            alert("Happy Journaling!");
        } else {
            alert("Please fill out your journal entry. A minimum of an entry is required.");
        }
    }

    //NEXT BUTTON/PREVIOU BUTTO
    
    return(
        <div className="entries">
            <div className="entryBox">
                <h1 className="myEntires">My Entries</h1>
                <div className="usersInput">
                    <form onSubmit={addEntry}>
                        <input 
                            name="subject"
                            type="text" 
                            placeholder="Subject" 
                            value={formData.subject}
                            onChange={handleChange}
                            />
                        <br />
                        <input
                            name="mood" 
                            type="text" 
                            placeholder="Mood" 
                            value={formData.mood}
                            onChange={handleChange}
                            />
                    </form>
                </div>
                <br />

                <textarea 
                    name="entry"
                    placeholder="Write at least 3-5 sentences of your daily entry"
                    value={formData.entry}
                    onChange={handleChange}
                    >
                    </textarea>
                <div className="postBtns">
                    <button 
                        type="submit" 
                        className="submitBtn"
                        onClick={addEntry}   
                    >
                        Submit
                    </button>
                    <button type="button" className="editBtn">✏</button>
                </div>
            </div>
            <br />

            <button type="button" className="prevBtn">←</button>
            <button type="button" className="nextBtn">→</button>
        </div>
    )
}