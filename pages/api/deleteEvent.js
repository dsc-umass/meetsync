import events from './events.json';
export default (req, res) => {
    //need to send delete request to database
    res.status(200).json(events[req.query.id]);
  };