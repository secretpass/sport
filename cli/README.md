# SecretPass Sport Cli

Sport cli allows you to access and manage your secrets locally or through a cloud provider.

## Installation
Install instructions here

## Usage (Local - VCS Based)

### New Project 
To start a new secret management project, run `sport init` command.
```shell
sport init --local
```

The command takes the options below with a fallback to interactive setup if some options are missing.

Options:
- `--name`: The name of the project
- `--admin-email`: Your email as the primary user/owner of the project

  **NOTE:** Admin users have access to all secrets in all environments.
- `--description`: Optional description of the project
- `--encryption`: The mode you'd like to use to encrypt your secrets, the value should be one of:
  - `ECC` - Classical elliptic-curve key exchange algorithm that is fast and secure on many types of hardware, it's not safe against future quantum computer attacks.
  - `KEM` - Post-quantum attack safe key-encapsulation mechanism; has relatively larger keys and cipher outputs but relatively fast computation in comparison to `ECC`.
  - `Hybrid` - A combination of these 2 algorithms ensuring safety if either of the algorithms is ever compromised.

  **NOTE:** Once set, this value cannot be changed.

  Most projects should be strongly protected by `ECC` unless you have special security needs.  

- `--key_types`: A comma separated key type that you want to allow as follows:
  - `PassKey` - allow users to use on device passkeys to encrypt and decrypt credentials
  - `Hardware` - allow users to use hardware keys such as yubi key for encryption and decryption
  - `SSH` - In machines where passkeys and hardware keys are not supported, you can allow the use of SSH keys

    **NOTE:** This method is less secure than PassKey and Hardware keys since the value of the SSH key is accessible on the user's machine
  - `Machine` - These are RAW private and public keys meant for machine/agent use, they should be carefully handled and scoped to the least access necessary


### Running Applications

You can run your application with secrets provided as environment variables by
```shell
sport run --env [env] --secrets [optional list of secrets] -- [your command]
```

### Export Secrets