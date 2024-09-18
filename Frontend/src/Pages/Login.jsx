import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
 // Import Marginer component
import { motion } from "framer-motion";
import { Marginer } from "../Components/Marginer";

// Styled components for form elements and layout
const BoxContainer = styled.div`
  width: 280px;
  min-height: 550px;
  display: flex;
  flex-direction: column;
  border-radius: 19px;
  background-color: white;
  box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
  position: relative;
  overflow: hidden;
  z-index: 1;
`;

const Input = styled.input`
  width: 90%;
  height: 40px;
  outline: none;
  border: none;
  padding: 0px 20px;
  border-bottom: 1.4px solid rgba(200, 200, 200, 0.4);
  font-size: 15px;

  &::placeholder {
    color: rgba(200, 200, 200, 1);
  }

  &:focus {
    outline: none;
    border-bottom: 2px solid rgb(9, 9, 121);
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 11px 40%;
  color: white;
  font-size: 15px;
  font-weight: 600;
  border: none;
  border-radius: 100px;
  cursor: pointer;
  transition: all 240ms ease-in-out;
  background: rgb(9, 9, 121);
  background: linear-gradient(90deg, rgba(9,9,121,1) 30%, rgba(0,212,255,1) 100%);
  z-index: 0;

  &:hover {
    filter: brightness(1.03);
  }
`;

const TopContainer = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 1.8em;
  padding-bottom: 5em;
`;

const BackDrop = styled(motion.div)`
  width: 160%;
  height: 550px;
  position: absolute;
  top: -290px;
  left: -70px;
  border-radius: 50%;
  transform: rotate(60deg);
  background: rgb(9, 9, 121);
  background: linear-gradient(90deg, rgba(9,9,121,1) 30%, rgba(0,212,255,1) 100%);
  z-index: 0;
`;

export function Login() {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [age, setage] = useState(0);
  const navigate = useNavigate();

  return (
    <div className="bg-gray-100 flex flex-col items-center justify-center min-h-screen p-6">
      <BoxContainer>
        <TopContainer>
          <BackDrop />
        </TopContainer>

        <h2 className="text-2xl font-bold mb-6 text-center">Signup</h2>

        <Input
          type="text"
          placeholder="Username"
          onChange={(e) => setusername(e.target.value)}
        />

        {/* Adding vertical margin */}
        <Marginer direction="vertical" margin={10} />

        <Input
          type="password"
          placeholder="Password"
          onChange={(e) => setpassword(e.target.value)}
        />

        {/* Adding vertical margin */}
        <Marginer direction="vertical" margin={10} />

        <Input
          type="text"
          placeholder="Age"
          onChange={(e) => setage(e.target.value)}
        />

        {/* Adding vertical margin */}
        <Marginer direction="vertical" margin={20} />

        <SubmitButton
          id="signup"
          onClick={async () => {
            fetch("http://localhost:3088/signup", {
              method: "POST",
              body: JSON.stringify({
                username: username,
                password: password,
                age: Number(age),
              }),
              headers: {
                "Content-Type": "application/json",
              },
            })
              .then(async (res) => {
                if (!res.ok) {
                  const errorData = await res.json();
                  throw new Error(errorData.message || "Failed to create user.");
                }
                alert("User Created");
                navigate("/homepage");
              })
              .catch(function (error) {
                console.error("Error occurred:", error);
                alert("You Entered Invalid Inputs");
              });
          }}
        >
          Signup
        </SubmitButton>

        {/* Adding vertical margin */}
        <Marginer direction="vertical" margin={10} />
      </BoxContainer>
    </div>
  );
}
