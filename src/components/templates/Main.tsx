import type { ReactNode } from 'react';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (

  [props.meta, props.children]


  // {<div className="">
  //   {props.meta}
  //   <div className="">
  //     <div className="">{props.children}</div>
  //   </div>
  // </div>}
);

export { Main };
