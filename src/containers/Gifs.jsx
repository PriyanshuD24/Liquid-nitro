import React from 'react'
import { HtmlGif } from '../components'

const Gifs = ({ changeScene, isMobile }) => {
  return (
    <>
      {!isMobile && (
        <HtmlGif
          rot={[-0.85, 0, 0]}
          pos={[-2.16, 14.9, 5]}
          scale={0.5}
          width={'620px'}
          height={'310px'}
          fileName={'1.mp4'}
          alt={'aboutme'}
          changeScene={changeScene}
          snum={1}
        />
      )}
      {!isMobile && (
        <HtmlGif
          rot={[1.5, Math.PI, 0]}
          pos={[-2.5, 3.95, -5.6]}
          width={'870px'} //870
          height={'785px'} //785
          fileName={'2.mp4'}
          alt={'projects'}
          changeScene={changeScene}
          snum={2}
        />
      )}
      <HtmlGif
        rot={[-2.3, 3.2, 0]}
        pos={[-4.2, 15.45, -0.8]}
        width={'558px'}
        height={'675px'}
        fileName={'3.mp4'}
        alt={'music'}
        changeScene={changeScene}
        snum={3}
      />
      {/* {!isMobile && (
        <HtmlGif
          rot={[0, -Math.PI / 2, 0]}
          pos={[-7.6, 16.02, -2.18]}
          width={'525px'}
          height={'280px'}
          fileName={'4.mp4'}
          alt={'gif1'}
        />
      )} */}
      {/* {!isMobile && (
        <HtmlGif
          rot={[0, -Math.PI / 2, 0]}
          pos={[-7.6, 16.02, 0.99]}
          width={'525px'}
          height={'280px'}
          fileName={'5.mp4'}
          alt={'gif2'}
        />
      )}
      {!isMobile && (
        <HtmlGif
          rot={[0, -Math.PI / 2, 0]}
          pos={[-7.6, 18.05, 0.83]}
          width={'475px'}
          height={'260px'}
          fileName={'7.mp4'}
          alt={'gif3'}
        />
      )}
      {!isMobile && (
        <HtmlGif
          rot={[0, -Math.PI / 2, 0]}
          pos={[-7.6, 20.16, 0.58]}
          width={'375px'}
          height={'295px'}
          fileName={'9.mp4'}
          alt={'gif4'}
        />
      )}
      {!isMobile && (
        <HtmlGif
          rot={[0, -Math.PI / 2, 0]}
          pos={[-7.6, 18.08, -1.848]}
          width={'375px'}
          height={'250px'}
          fileName={'6.mp4'}
          alt={'gif5'}
        />
      )}
      {!isMobile && (
        <HtmlGif
          rot={[0, -Math.PI / 2, 0]}
          pos={[-7.6, 20.23, -1.65]}
          width={'275px'}
          height={'320px'}
          fileName={'8.mp4'}
          alt={'gif6'}
        />
      )} */}
    </>
  )
}

export default Gifs
