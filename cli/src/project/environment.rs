use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct EnvironmentDefinition {
    pub name: String,
    pub description: String,
}


#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct EnvironmentAccess {
    pub name: String,
    pub secrets: Vec<String>
}
