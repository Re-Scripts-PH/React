


import 
{
  ReactNode,
  ElementType,
  ComponentPropsWithoutRef
}
from 'react'

interface ContainerProps<T extends ElementType> extends ComponentPropsWithoutRef<T>
{
  as?: T;
  children: ReactNode;
}

const Container = <C extends ElementType>({ as,children,...props }: ContainerProps<C>) => 
{
  const Component = as || 'div'
  return (
    <Component { ...props }>
      { children }
    </Component>
  )
}


export default Container;
