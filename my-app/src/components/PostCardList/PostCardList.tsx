import PostCard from "../PostCard/PostCard";
import PostCardMedium from "../PostCardMedium/PostCardMedium";
import PostCardSmall from "../PostCardSmall/PostCardSmall";
import './PostCardList.css'

export default function PostCardList() {
    return ( 
        <>
        <div className="main-block">
          <div className='left-side'>
              <PostCard />
              <div className="left-side-bottom">
                  <PostCardMedium /> 
                  <PostCardMedium />
                  <PostCardMedium />
                  <PostCardMedium />
                  <PostCardMedium />
                  <PostCardMedium />   
              </div>
          </div>
          <div className='right-side'>
              <PostCardSmall />
              <PostCardSmall />
              <PostCardSmall />
              <PostCardSmall />
              <PostCardSmall />
              <PostCardSmall />
          </div>
        </div>
        </>
     );
}