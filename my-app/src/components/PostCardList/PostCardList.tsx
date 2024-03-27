import PostCard from "../PostCard/PostCard";
import PostCardMedium from "../PostCardMedium/PostCardMedium";
import PostCardSmall from "../PostCardSmall/PostCardSmall";
import './PostCardList.css'

export default function PostCardList() {
    return ( 
        <>
        <div className="main-block">
          <div className='left-side'>
              <PostCard date="April 20, 2021" image="../../images/large.png" title="Astronauts prep for new solar arrays on nearly seven-hour spacewalk ..." description="Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight."/>
              <div className="left-side-bottom">
                  <PostCardMedium date="April 20, 2021" image="../../images/medium.png" title="Astronauts prep for new solar arrays on nearly seven-hour spacewalk"/> 
                  <PostCardMedium date="April 20, 2021" image="../../images/medium.png" title="Astronauts prep for new solar arrays on nearly seven-hour spacewalk"/>
                  <PostCardMedium date="April 20, 2021" image="../../images/medium.png" title="Astronauts prep for new solar arrays on nearly seven-hour spacewalk"/>
                  <PostCardMedium date="April 20, 2021" image="../../images/medium.png" title="Astronauts prep for new solar arrays on nearly seven-hour spacewalk"/>
                  <PostCardMedium date="April 20, 2021" image="../../images/medium.png" title="Astronauts prep for new solar arrays on nearly seven-hour spacewalk"/>
                  <PostCardMedium date="April 20, 2021" image="../../images/medium.png" title="Astronauts prep for new solar arrays on nearly seven-hour spacewalk"/>   
              </div>
          </div>
          <div className='right-side'>
              <PostCardSmall date="April 20, 2021" image="../../images/medium.png" title="Astronauts prep for new solar arrays on nearly seven-hour spacewalk"/>
              <PostCardSmall date="April 20, 2021" image="../../images/medium.png" title="Astronauts prep for new solar arrays on nearly seven-hour spacewalk"/>
              <PostCardSmall date="April 20, 2021" image="../../images/medium.png" title="Astronauts prep for new solar arrays on nearly seven-hour spacewalk"/>
              <PostCardSmall date="April 20, 2021" image="../../images/medium.png" title="Astronauts prep for new solar arrays on nearly seven-hour spacewalk"/>
              <PostCardSmall date="April 20, 2021" image="../../images/medium.png" title="Astronauts prep for new solar arrays on nearly seven-hour spacewalk"/>
              <PostCardSmall date="April 20, 2021" image="../../images/medium.png" title="Astronauts prep for new solar arrays on nearly seven-hour spacewalk"/>
          </div>
        </div>
        </>
     );
}