
import
{
  FormEvent,
  ComponentPropsWithoutRef,
  useRef,
  useImperativeHandle,
  forwardRef
}
from 'react'

export interface FormHandle
{
  clear: () => void;
};

interface FormProps extends ComponentPropsWithoutRef<'form'>
{
  onSave:(value: unknown) => void;
}


const Form = forwardRef<FormHandle,FormProps>(function Form({ onSave,children,...otherProps }, ref)
{
  const form = useRef<HTMLFormElement>(null);
  
  useImperativeHandle(ref, () =>
                      {
                        return {
                          clear() {
                            console.log('clearning');
                            form.current?.reset();
                          }
                        }
                      });

  function handleSubmit(event: FormEvent<HTMLFormElement>)
  {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData)
    onSave(data);
  }

  return(
    <form onSubmit = { handleSubmit }{ ...otherProps } ref = { form } >
      { children }
    </form>
  )
});


export default Form
