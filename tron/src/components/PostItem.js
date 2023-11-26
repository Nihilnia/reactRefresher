import GetAllPosts from "../DB/GetAllPosts";

function PostItem() {
  return (
    <>
      {GetAllPosts().map((f) => {
        return (
          <section key={f.id}>
            <div className="card">
              <h5 className="card-header">{f.title}</h5>
              <div className="card-body">
                <h5 className="card-title">
                  User ID: {f.userId} Post ID: {f.id}
                </h5>
                <p className="card-text">{f.body}</p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}

export default PostItem;
