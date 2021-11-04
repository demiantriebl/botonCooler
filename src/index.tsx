import React, { FC, useState } from 'react';

export type PostPreviewProps = JSX.IntrinsicElements['div'] & {
  children?: string;
  variante?: 'colorido' | 'negro' | 'borde';
};

/* export interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: ReactChild;
  variante?: 'colorido' | 'negro' | 'borde';
} */
/**  Boton que toma un componente React, o usa el string "Boton Nuevo" oor defecto */

export const BotonCooler: FC<PostPreviewProps> = ({
  children,
  variante,
  ...props
}) => {
  let back;
  let borde = 'none';
  let colorTexto = 'black';
  switch (variante) {
    case 'colorido':
      back =
        'linear-gradient(90deg, rgba(243,96,62,1) 0%, rgba(202,4,157,1) 100%)';
      borde = 'none';
      colorTexto = 'black';
      break;
    case 'negro':
      colorTexto = 'white';
      back = '#222';
      borde = 'none';
      break;
    case 'borde':
      back = 'transparent';
      borde = '3px solid #fff';
      colorTexto = 'white';
      break;
    default:
      break;
  }
  const botonCss = {
    background: back,
    color: colorTexto,
    border: borde,
    width: 'fit-content',
    padding: '1em',
    fontFamily: 'system-ui',
    fontVariant: 'all-petite-caps',
    fontSize: 'x-large',
    transition: ' background-color 0.5s ease',
  };
  const [hover, setHover] = useState<boolean>(false);

  const [click, setClick] = useState<boolean>(false);
  const [estilo, setEstilo] = useState<object>(botonCss);
  function handleHover() {
    setHover(!hover);
    switch (variante) {
      case 'colorido':
        if (hover) {
          setEstilo((old) => ({
            ...old,
            background:
              'linear-gradient(90deg, rgba(243,96,62,1) 0%, rgba(202,4,157,1) 100%)',
          }));
        } else {
          setEstilo((old) => ({
            ...old,
            background:
              'linear-gradient(90deg, rgba(202,4,157,1) 0%, rgba(243,96,62,1) 100%)',
          }));
        }
        break;
      case 'negro':
        if (hover) {
          setEstilo((old) => ({ ...old, background: '#222', color: '#fff'}));
        } else {
          setEstilo((old) => ({ ...old, background: '#fff', color:  '#222'  }));
        }
        break;
      case 'borde':
        if (hover) {
          setEstilo((old) => ({
            ...old,
            border: '3px solid #fff',
            background: 'transparent',
            color: '#fff'
          }));
        } else {
          setEstilo((old) => ({ ...old, background: '#fff',  color:  '#222' }));
        }
        break;
      default:
        break;
    }
    setHover(!hover);
  }
  function handleClick() {
    setClick(!click);
    if (click) {
      setEstilo((old) => ({
        ...old,
        background:
          'linear-gradient(90deg, rgba(243,96,62,1) 0%, rgba(202,4,157,1) 100%)',
      }));
    } else {
      setEstilo((old) => ({
        ...old,
        background:
          'linear-gradient(90deg, rgba(243,96,62,.5) 0%, rgba(202,4,157,.5) 100%)',
      }));
    }
  }

  return (
    <div
      {...props}
      style={estilo}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
      onMouseDownCapture={handleClick}
      onMouseUp={handleClick}
    >
      {children || `Boton Nuevo`}
    </div>
  );
};
