import bcrypt from "bcryptjs";

const Encryption = function(){
    
    const hashPassword = async (password) => {
        try {
            const saltRounds = 10; 
            const hash = await bcrypt.hash(password, saltRounds);
            console.log(hash);
            return hash; 
        } catch (err) {
            console.error("Error during hashing:", err);
            throw err;
        }
    };
    
    const comparePassword = async (password, hash) => {
        try {
            const isMatch = await bcrypt.compare(password, hash);
            return isMatch;
        } catch (err) {
            console.error("Error during comparison:", err);
            throw err;
        }
    };

    return {
        hashPassword,
        comparePassword
    }

}();

export default Encryption;
// Used ChatGPT to understand and copy this code