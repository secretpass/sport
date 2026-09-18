use crate::project::{EncryptionKeyType};

pub struct ProjectPublicKeys {
    pub _id: String,
    pub name: String,
    pub _user_email: String,
    pub _type: EncryptionKeyType,
}