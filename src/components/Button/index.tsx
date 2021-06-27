import { ButtonHTMLAttributes } from 'react';
import './styles.scss';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {

  isOutlined?: boolean

};

export function Button({isOutlined = false, ...props}: ButtonProps){

  //let counter = 0;

  return (

    <button 
    
    className={`button ${isOutlined ? 'outlined' : ''}`}  
    {...props} 
    
    />

  )

}
