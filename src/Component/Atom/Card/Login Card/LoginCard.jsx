import React, { useEffect, useState } from "react";
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
import "./LoginCardstyle.css";
import axios from "axios";

const LoginCard = (props) => {
  // Input state
  const [emailLogin, setEmailLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");

  // Password
  const [isVisible, setIsVisible] = React.useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  // Modal
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  // Post Login API
  const postApiLogin = () => {
    axios
      .post("https://api.mudoapi.tech/login", {
        // Key harus sama dengan postman
        username: emailLogin,
        password: passwordLogin,
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
      <h1 className="Title">Shop at TokoKita</h1>
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
            setEmailLogin(event.target.value);
          }}
        />
      </div>
      <div className="WrapperInput">
        <div className="Label">Password</div>
        <Input
          variant="bordered"
          placeholder="Enter your password"
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
            setPasswordLogin(event.target.value);
          }}
        />
      </div>
      <Button color="primary" className="btn-login" onClick={postApiLogin}>
        Login
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
        Don’t have an account yet?{" "}
        <span>
          <a href="#" onClick={props.handleRegister}>
            Register
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

export default LoginCard;
