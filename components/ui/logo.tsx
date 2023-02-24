import React, {HTMLAttributes} from 'react';
import Image from "next/image";

type LogoComponentProps = HTMLAttributes<HTMLImageElement> & {
    width?: number | `${number}`
    height?: number | `${number}`
}

const LogoComponent = (props: LogoComponentProps) => {




    return <Image src={"/img/logo.svg"} alt={"comapny-logo"}
                  width={props.width || 40}
                  height={props.height || props.width || 40}
                  className={props.className}
    />
};

export default LogoComponent;
