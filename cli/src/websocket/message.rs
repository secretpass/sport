use serde::{Deserialize};


#[derive(Deserialize, Debug)]
#[serde(tag="event", content = "data")]
enum IncomingMessage {
    
}