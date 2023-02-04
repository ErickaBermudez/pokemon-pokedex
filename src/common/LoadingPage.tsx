import React from 'react';
import LoadingOverlay from 'react-loading-overlay-ts';
import BounceLoader from 'react-spinners/BounceLoader'

type LoadingPageProps = {
    active: boolean,
    children: any
}

export const LoadingPage = ({ active, children }: LoadingPageProps) => {
  return (
    <LoadingOverlay
      active={active}
      spinner={<BounceLoader />}
    >
      {children}
    </LoadingOverlay>
  )
}