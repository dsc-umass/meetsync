import events from './events.json';
export default (req, res) => {
    //const event = events[Math.floor(Math.random() * events.length)];
    res.status(200).json(events[req.query.id]);
  };