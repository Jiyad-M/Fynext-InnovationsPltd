let storedData = null;

const revCtrlPost = (req, res) => {
    const rcvdSur = req.body;
    storedData = rcvdSur;

    res.status(200).json({ success: true, message: 'Data stored successfully' });
};

const revCtrlGet = (req, res) => {
    if (storedData) {
        res.status(200).json(storedData); 
    } else {
        res.status(404).json({ success: false, message: 'Data not found' });
    }
};

module.exports = {
    revCtrlPost,
    revCtrlGet,
};
