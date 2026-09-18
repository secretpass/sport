import {
  Card,
  Description,
  Form,
  Input,
  Label,
  Radio,
  RadioGroup,
  TextArea,
  TextField,
} from "@heroui/react";
import { EncryptionAlgorithm } from "../shared/algorithms";

export function App() {
  return (
    <Card className="w-full max-w-2xl">
      <Card.Header>
        <Card.Title>Project setup</Card.Title>
        <Card.Description>
          Create a new secure storage under ~/Projects/some-project
        </Card.Description>
      </Card.Header>
      <Card.Content>
        <Form className="flex flex-col gap-6">
          <TextField>
            <Label>Project Name</Label>
            <Input placeholder="My Top Secret Project" />
          </TextField>

          <TextField>
            <Label>Description</Label>
            <TextArea placeholder="A short description of what you're securing..." />
          </TextField>

          <RadioGroup defaultValue={EncryptionAlgorithm.Ecc}>
            <Label>Encryption Algorithm</Label>
            <Description>
              The algorithm used to secure your secrets, this cannot be changed
              once the project is setup.
            </Description>
            <Radio value={EncryptionAlgorithm.Ecc}>
              <Radio.Content>
                <Radio.Control>
                  <Radio.Indicator />
                </Radio.Control>
                Elliptic-curve Cryptography (ECC - X25519)
              </Radio.Content>
              <Description>
                Fast and secure key exchange algorithm, it's not considered
                "safe" against future quantum computer attacks.
              </Description>
            </Radio>
            <Radio value={EncryptionAlgorithm.Kem}>
              <Radio.Content>
                <Radio.Control>
                  <Radio.Indicator />
                </Radio.Control>
                Key Encapsulation Mechanism (KEM - ML-KEM-768)
              </Radio.Content>
              <Description>
                Post-quantum attack safe; has relatively larger keys and cipher
                outputs but relatively fast computation in comparison to{" "}
                <code>X25519</code>.
              </Description>
            </Radio>
            <Radio value={EncryptionAlgorithm.Hybrid}>
              <Radio.Content>
                <Radio.Control>
                  <Radio.Indicator />
                </Radio.Control>
                A combination of X25519 and ML-KEM-768
              </Radio.Content>
              <Description>
                A combination of these 2 algorithms ensuring safety if either of
                the algorithms is ever compromised.
              </Description>
            </Radio>
          </RadioGroup>
        </Form>
      </Card.Content>
    </Card>
  );
}
