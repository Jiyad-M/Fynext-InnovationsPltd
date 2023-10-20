const SurveyDB = require("../model/surSchema");

const surCtrl = async(req,res)=>{
    
        
        try {
            
            const { rcvdData1
                , rcvdData2
                , rcvdData3
                , rcvdData4
                , rcvdData5
            } = req.body;
            
            const Questions = await SurveyDB.create({
                Que1: rcvdData1,
                Que2: rcvdData2,
                Que3: rcvdData3,
                Que4: rcvdData4,
                Que5: rcvdData5
            });
            res.status(200)
            res.json({ success: true, message: 'Successfully submitted' });
            
    
        } catch (error) {
            res.status(502)
            res.json({ success: false, message: 'Data not stored. please try again... ' }); 
            console.log(error._message)
    
        }
    
    }


module.exports = surCtrl;