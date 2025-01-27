import { TimersContext,useTimersContext } from '../store/timers-context.tsx';
import Button from './ui/Button.tsx';


const Header = () => 
{
  const timerCtx = useTimersContext();
  
  return (
    <header>
      <h1>React Timer</h1>
      <Button>{ timerCtx.isRunning ? 'Stop' : 'Start' }Timer</Button>
    </header>
  )
}


export default Header
