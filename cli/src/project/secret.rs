use serde::{Deserialize, Serialize};
use crate::project::environment::EnvironmentAccess;

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SecretDefinition {
    pub _name: String,
    pub description: String,
    pub _environment: Vec<String>
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TeamDefinition {
    pub _name: String,
    pub description: String,
    pub _members: Vec<String>,
    pub _access: Vec<EnvironmentAccess>,
}
