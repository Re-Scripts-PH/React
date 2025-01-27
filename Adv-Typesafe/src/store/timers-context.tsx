import React, { ReactNode,createContext,useContext } from 'react'

interface Timer 
{
  name: string;
  duration: number;
}

interface TimersState 
{
  isRunning: boolean;
  timer: Timer[];
}

interface TimersContextValue extends TimersState
{
  addTimer: (timerData: Timer) => void;
  startTimers: () => void;
  stopTimers: () => void;
}

interface TimersContextProviderProps 
{
  children: ReactNode
}

const TimersContext = createContext<TimersContextValue | null>(null);
export function useTimersContext() 
{
  const timersCtx = useContext(TimersContext)
  if(timersCtx === null)
    {
      throw new Error('TimersContext is null - that should not be the case!')
    }
  return timersCtx;
}

const TimersContextProvider = ({ children }: TimersContextProviderProps ) => 
{
  const ctx: TimersContextValue = 
  {
    timers: [],
    isRunning: false,
    addTimer(timerData)
    {

    },
    startTimers()
    {

    },
    stopTimers()
    {

    }
  };

  return (
    <TimersContext.Provider value={ctx}>
      { children }
    </TimersContext.Provider>
  )
}



export default  TimersContextProvider
