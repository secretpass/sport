use anyhow::Ok;
use argon2::Argon2;
pub use fips203::ml_kem_768::{KG as KemKeygen, DecapsKey as KemPrivateKey, EncapsKey as KemPublicKey};
use fips203::traits::{KeyGen};
pub use x25519_dalek::{StaticSecret as EccPrivateKey, PublicKey as EccPublicKey};

pub type SeedKeys = [[u8; 32]; 2];

pub fn derive_ecc_keys(seed_keys: SeedKeys) -> anyhow::Result<(EccPublicKey, EccPrivateKey)> {
    let mut seed = [0u8; 32];

    Argon2::default().hash_password_into(&seed_keys[0], &seed_keys[1], &mut seed)?;

    let private_key = EccPrivateKey::from(seed);
    let public_key = EccPublicKey::from(&private_key);

    Ok((public_key, private_key))
}

pub fn derive_kem_keys(seed_keys: SeedKeys) -> anyhow::Result<(KemPublicKey, KemPrivateKey)> {
    let (public_key, private_key) = KemKeygen::keygen_from_seed(seed_keys[0], seed_keys[1]);

    Ok((public_key, private_key))
}
