import React, { useState } from "react";
import { Input } from "@nextui-org/react";
import { EyeFilledIcon } from "./EyeFilledIcon";
import { EyeSlashFilledIcon } from "./EyeSlashFilledIcon";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import "./RegisterCardstyle.css";
import axios from "axios";

const RegisterCard = (props) => {
  // Input state
  const [emailRegister, setEmailRegister] = useState("");
  const [passwordRegister, setPasswordRegister] = useState("");

  // Password
  const [isVisible, setIsVisible] = React.useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  // Modal
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  // Post Login API
  const postApiRegister = () => {
    axios
      .post("https://api.mudoapi.tech/register", {
        name: "sangatprima",
        username: "Cobaganteng",
        password: "test123",
        roleId: 1,
      })
      .then((res) => {
        console.log("Berhasil", res.data);
      })
      .catch((err) => {
        onOpen();
      });
  };

  return (
    <div className="Card">
      <h1 className="Title">Please Register First</h1>
      <h3 className="Paragraph">Please enter your details below</h3>
      <div className="WrapperInput">
        <div className="Label">Email</div>
        <Input
          isClearable
          type="email"
          variant="bordered"
          placeholder="Enter your email"
          className="input"
          // Ambil inputan user
          onChange={(event) => {
            setEmailRegister(event.target.value);
          }}
        />
      </div>
      <div className="WrapperInput">
        <div className="Label">Create Password</div>
        <Input
          variant="bordered"
          placeholder="Cereate your password"
          endContent={
            <button
              className="focus:outline-none"
              type="button"
              onClick={toggleVisibility}
            >
              {isVisible ? (
                <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
              ) : (
                <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
              )}
            </button>
          }
          type={isVisible ? "text" : "password"}
          className="input"
          // Ambil inputan user
          onChange={(event) => {
            setPasswordRegister(event.target.value);
          }}
        />
      </div>
      <Button color="primary" className="btn-login" onClick={postApiRegister}>
        Register
      </Button>
      <h1 className="Text-Form">or continue with</h1>
      <div className="SocialMedia">
        <button className="Wrapper-Sosmed">
          <img src="src\assets\Image\aplelogo.png" alt="" />
        </button>
        <button className="Wrapper-Sosmed">
          <img src="src\assets\Image\google.png" alt="" />
        </button>
        <button className="Wrapper-Sosmed">
          <img src="src\assets\Image\facebook.png" alt="" />
        </button>
      </div>
      <h1 className="Text-Form">
        Have account?{" "}
        <span>
          <a href="#" onClick={props.handleLogin}>
            Login
          </a>
        </span>
      </h1>
      {/* Modal */}
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Warning</ModalHeader>
              <ModalBody>
                <p>Missing email login or username!</p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default RegisterCard;
