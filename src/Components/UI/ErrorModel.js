import React from 'react'
import ReactDOM from 'react-dom'
import Button from './Button';
import Card from '../UI/Card';

const Backdrop = (props) => {
  return <div className='fixed top-0 left-0 w-full h-screen z-20 bg-[rgba(0, 0, 0, 0.65)]' onClick={props.onClick}/>;
};

const Model = (props) => {
  return (
    <Card className='fixed z-50 w-46p left-1/5 top-1/3 p-0'>
      <header className='bg-red-800 font-bold p-4 rounded-t-md'>
        <h2 className='m-0 text-white text-xl '>{props.title}</h2>
      </header>
      <div className='p-4'>
        <p>{props.message}</p>
      </div>
      <footer className='flex justify-end p-4'>
        <Button onClick={props.onClick}>Okay</Button>
      </footer>
    </Card>
  );
};

const ErrorModel = (props) => {
  const errorHandler = () => {
    props.onErrorHandler(null);
  };
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClick={errorHandler} />, document.getElementById("backdrop"))}
      {ReactDOM.createPortal(<Model title={props.title} message={props.message} onClick={errorHandler} />, document.getElementById("model-overlay"))}
    </>
  )
};

export default ErrorModel;