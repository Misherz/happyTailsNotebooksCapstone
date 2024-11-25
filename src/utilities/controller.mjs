import axios from "axios";

//getting backend
 async function getEntries() {
    const apiUrl ='http://localhost:3000/journal/';
    
    try {
        const res = await axios.get(apiUrl);

        // Log and return the response data
        console.log("API Response:", res.data);
        return res.data;
        
    } catch (err) {
        console.error("Fetching Error:", err);
        
    }
}

async function createEntry(formData) {
    
    try {
      let url = 'http://localhost:3000/journal';
  
      let res = await axios.post(url, formData);
  
      return res.data;
    } catch (err) {
    //   console.error(err);
    }
  }


  async function deleteEntry(id) {
    try {
        let url = `http://localhost:3000/journal/${id}`;
 
        let res = await axios.delete(url);

        return true;
    } catch (err) {
        console.error(err);
        return false;
    }
}


async function updateEntry(id, updatedData) {
    try {
        let url = `http://localhost:3000/journal/${id}`;
        let res = await axios.patch(url, updatedData);
        console.log("Updated Entry:", res.data);
        return res.data;
    } catch (err) {
        console.error("Error updating entry:", err);
        throw err;  
    }
}

  async function findOneEntry(id) {
    try {
      let url = `http://localhost:3000/journal${id}`;
  
      let res = await axios.get(url);
  
      return res.data;
    } catch (err) {
      console.error(err);
    }
  }
  


export {
    getEntries,
    createEntry,
    deleteEntry,
    updateEntry,
    findOneEntry,
  };