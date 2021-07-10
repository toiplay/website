import React, { useEffect, useRef, useState } from 'react';

import styled, { css } from 'styled-components';

const Section = styled.section`
margin: 20px 0;
`;

const StyledFadeInSection = styled.section<{ visible: boolean }>`
margin: 100px 0;
opacity: 0;
transform: translate(0, 50%);
visibility: hidden;
transition: opacity 300ms ease-out, transform 300ms ease-out;
will-change: opacity, visibility;
${({ visible }: { visible: boolean }): string => visible && css`
opacity: 1;
transform: none;
visibility: visible;
`}
`;

export const FadeInSection: React.FunctionComponent<React.HTMLAttributes<HTMLDivElement> & FadeInSectionProps> = (props): React.ReactElement => {

    const domRef = useRef();
  
    const [ visible, setVisible ] = useState<boolean>(false);
  
    useEffect((): () => void => {

        if(!('IntersectionObserver' in window)) {
            return;
        }
        
        const observer: IntersectionObserver = new IntersectionObserver((entries: Array<IntersectionObserverEntry>): void => {
            if(entries[0].isIntersecting) {
                setVisible(true);
                observer.unobserve(domRef.current);
            }
        }, props.observerInit);
      
        observer.observe(domRef.current);
      
        return (): void => observer.unobserve(domRef.current);

    }, []);
  
    return (
        <StyledFadeInSection visible={visible} ref={domRef} {...props}>
            { props.children }
        </StyledFadeInSection>
    );

}

interface FadeInSectionProps {

    observerInit?: IntersectionObserverInit

}

export default Section;