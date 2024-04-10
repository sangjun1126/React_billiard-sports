import { NextPage } from "next";
import React, { useState } from "react"; // useState 추가
import Button from "../components/lib/button";

const Signup: NextPage = () => {
 // 초기값 세팅 - 아이디, 닉네임 비밀번호, 비밀번호확인, 이메일, 전화번호, 생년월일
 const [id, setId] = useState(""); // React.useState -> useState 변경
 const [name, setName] = useState(""); // React.useState -> useState 변경
 const [password, setPassword] = useState(""); // React.useState -> useState 변경
 const [passwordConfirm, setPasswordConfirm] = useState(""); // React.useState -> useState 변경
 const [email, setEmail] = useState(""); // React.useState -> useState 변경
 const [phone, setPhone] = useState(""); // React.useState -> useState 변경
 const [birth, setBirth] = useState(""); // React.useState -> useState 변경

 // 오류메세지 상태 저장
 const [idMessage, setIdMessage] = useState(""); // React.useState -> useState 변경
 const [nameMessage, setNameMessage] = useState(""); // React.useState -> useState 변경
 const [passwordMessage, setPasswordMessage] = useState(""); // React.useState -> useState 변경
 const [passwordConfirmMessage, setPasswordConfirmMessage] = useState(""); // React.useState -> useState 변경
 const [emailMessage, setEmailMessage] = useState(""); // React.useState -> useState 변경
 const [phoneMessage, setPhoneMessage] = useState(""); // React.useState -> useState 변경
 const [birthMessage, setBirthMessage] = useState(""); // React.useState -> useState 변경

 // 유효성 검사
 const [isId, setIsId] = useState(false); // React.useState -> useState 변경
 const [isname, setIsName] = useState(false); // React.useState -> useState 변경
 const [isPassword, setIsPassword] = useState(false); // React.useState -> useState 변경
 const [isPasswordConfirm, setIsPasswordConfirm] = useState(false); // React.useState -> useState 변경
 const [isEmail, setIsEmail] = useState(false); // React.useState -> useState 변경
 const [isPhone, setIsPhone] = useState(false); // React.useState -> useState 변경
 const [isBirth, setIsBirth] = useState(false); // React.useState -> useState 변경

 const onChangeId = (e) => {
   const currentId = e.target.value;
   setId(currentId);
   const idRegExp = /^[a-zA-z0-9]{4,12}$/;

   if (!idRegExp.test(currentId)) {
     setIdMessage("4-12사이 대소문자 또는 숫자만 입력해 주세요!");
     setIsId(false);
   } else {
     setIdMessage("사용가능한 아이디 입니다.");
     setIsId(true);
   }
 };

 const onChangeName = (e) => {
   const currentName = e.target.value;
   setName(currentName);

   if (currentName.length < 2 || currentName.length > 5) {
     setNameMessage("닉네임은 2글자 이상 5글자 이하로 입력해주세요!");
     setIsName(false);
   } else {
     setNameMessage("사용가능한 닉네임 입니다.");
     setIsName(true);
   }
 };

 const onChangePassword = (e) => {
   const currentPassword = e.target.value;
   setPassword(currentPassword);
   const passwordRegExp =
     /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
   if (!passwordRegExp.test(currentPassword)) {
     setPasswordMessage(
       "숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!"
     );
     setIsPassword(false);
   } else {
     setPasswordMessage("안전한 비밀번호 입니다.");
     setIsPassword(true);
   }
 };
 const onChangePasswordConfirm = (e) => {
   const currentPasswordConfirm = e.target.value;
   setPasswordConfirm(currentPasswordConfirm);
   if (password !== currentPasswordConfirm) {
     setPasswordConfirmMessage("떼잉~ 비밀번호가 똑같지 않아요!");
     setIsPasswordConfirm(false);
   } else {
     setPasswordConfirmMessage("똑같은 비밀번호를 입력했습니다.");
     setIsPasswordConfirm(true);
   }
 };
 const onChangeEmail = (e) => {
   const currentEmail = e.target.value;
   setEmail(currentEmail);
   const emailRegExp =
     /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{1,3}$/;

   if (!emailRegExp.test(currentEmail)) {
     setEmailMessage("이메일의 형식이 올바르지 않습니다!");
     setIsEmail(false);
   } else {
     setEmailMessage("사용 가능한 이메일 입니다.");
     setIsEmail(true);
   }
 };
 const onChangePhone = (e) => { // 매개변수 변경
   const currentPhone = e.target.value;
   setPhone(currentPhone);
   const phoneRegExp = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;

   if (!phoneRegExp.test(currentPhone)) {
     setPhoneMessage("올바른 형식이 아닙니다!");
     setIsPhone(false);
   } else {
     setPhoneMessage("사용 가능한 번호입니다:-)");
     setIsPhone(true);
   }
 };

 const addHyphen = (e) => {
   const currentNumber = e.target.value;
   setPhone(currentNumber);
   if (currentNumber.length === 3 || currentNumber.length === 8) { // 수정: '=='를 '==='로 변경
     setPhone(currentNumber + "-");
     onChangePhone(currentNumber + "-");
   } else {
     onChangePhone(currentNumber);
   }
 };

 const onChangeBirth = (e) => {
   const currentBirth = e.target.value;
   setBirth(currentBirth);
 };

 return (
   <>
     <h3>Sign Up</h3>
     <div className="form">
       <div className="form-el">
         <label htmlFor="id">Id</label> <br />
         <input id="id" name="id" value={id} onChange={onChangeId} />
         <p className="message"> {idMessage} </p>
       </div>

       <div className="form-el">
         <label htmlFor="name">Nick Name</label> <br />
         <input id="name" name="name" value={name} onChange={onChangeName} />
         <p className="message">{nameMessage}</p>
       </div>
       <div className="form-el">
         <label htmlFor="password">Password</label> <br />
         <input
           id="password"
           name="password"
           value={password}
           onChange={onChangePassword}
         />
         <p className="message">{passwordMessage}</p>
       </div>
       <div className="form-el">
         <label htmlFor="passwordConfirm">Password Confirm</label> <br />
         <input
           id="passwordConfirm"
           name="passwordConfirm"
           value={passwordConfirm}
           onChange={onChangePasswordConfirm}
         />
         <p className="message">{passwordConfirmMessage}</p>
       </div>
       <div className="form-el">
         <label htmlFor="email">Email</label> <br />
         <input
           id="email"
           name="name"
           value={email}
           onChange={onChangeEmail}
         />
         <p className="message">{emailMessage}</p>
       </div>
       <div className="form-el">
         <label htmlFor="phone">Phone</label> <br />
         <input id="phone" name="phone" value={phone} onChange={addHyphen} />
         <p className="message">{phoneMessage}</p>
       </div>
       <div className="form-el">
         <label htmlFor="birth">Birth</label> <br />
         <input
           id="birth"
           name="birth"
           value={birth}
           onChange={onChangeBirth}
         />
         <p className="message">{birthMessage}</p>
       </div>
       <br />
       <br />
       <button type="submit">Submit</button>
     </div>
   </>
 );
};

export default Signup;