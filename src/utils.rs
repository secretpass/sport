use std::sync::{Mutex, OnceLock};
use rand::rngs::{ChaCha12Rng};
use rand::{SeedableRng};

static RNG: OnceLock<Mutex<ChaCha12Rng>> = OnceLock::new();

pub fn get_global_rng() -> &'static Mutex<ChaCha12Rng> {
    RNG.get_or_init(|| {
        Mutex::new(ChaCha12Rng::from_seed(Default::default()))
    })
}
