use serde::{Deserialize, Serialize};
use secretpass_sport::EncryptionMode;
use crate::project::{EncryptionKeyType, UserDefinition};

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct InitLocalProject {
    id: String,
    name: String,
    description: String,
    key_types: Vec<EncryptionKeyType>,
    encryption: EncryptionMode,
    user: UserDefinition,
}