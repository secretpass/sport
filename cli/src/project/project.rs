use serde::{Deserialize, Serialize};
use secretpass_sport::{EncryptionAlgorithm};
use crate::project::environment::EnvironmentDefinition;
use crate::project::secret::{SecretDefinition, TeamDefinition};
use crate::project::user::UserDefinition;

#[derive(Debug, Clone, Copy, Serialize, Deserialize)]
pub enum EncryptionKeyType {
    PassKey,
    Hardware,
    SSH,
    Machine,
}

#[derive(Debug, Clone, Copy, Serialize, Deserialize)]
pub enum OperationMode {
    Local,
    Remote
}


#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SecretManagerProject {
    pub id: String,
    pub mode: OperationMode,
    pub name: String,
    pub description: String,
    pub key_support: Vec<EncryptionKeyType>,
    pub algorithm: EncryptionAlgorithm,
    pub environments: Vec<EnvironmentDefinition>,
    pub secrets: Vec<SecretDefinition>,
    pub users: Vec<UserDefinition>,
    pub teams: Vec<TeamDefinition>
}
