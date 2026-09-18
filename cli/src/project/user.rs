use serde::{Deserialize, Serialize};
use crate::project::environment::EnvironmentAccess;

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct UserDefinition {
    pub _username: String, // bill__at__mail__dot__com
    pub name: String,
    pub _role: String,
    pub _access: Vec<EnvironmentAccess>,
}
