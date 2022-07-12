import random from 'lodash/random'

export const sleep = (minTimeInMs: number, maxTimeInMs: number = minTimeInMs): Promise<void> => {
  const actualSleepTimeInMs = random(minTimeInMs, maxTimeInMs, false)

  return new Promise((resolve) => setTimeout(resolve, actualSleepTimeInMs))
}
