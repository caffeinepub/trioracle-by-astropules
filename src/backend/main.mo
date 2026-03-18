import Principal "mo:core/Principal";
import Map "mo:core/Map";
import Text "mo:core/Text";
import Iter "mo:core/Iter";
import Order "mo:core/Order";
import Time "mo:core/Time";
import Runtime "mo:core/Runtime";

actor {
  type Post = {
    id : Nat;
    title : Text;
    content : Text;
    author : Text;
    date : Int;
    category : PostCategory;
  };

  module Post {
    public func compare(post1 : Post, post2 : Post) : Order.Order {
      Nat.compare(post1.id, post2.id);
    };
  };

  type PostCategory = {
    #blog;
    #notice;
  };

  let posts = Map.empty<Nat, Post>();
  var nextPostId = 0;

  let adminCredentials = Map.empty<Text, Text>();
  adminCredentials.add("admin1", "password123");
  adminCredentials.add("admin2", "securePass456");

  // Authentication
  func authenticate(username : Text, password : Text) : Bool {
    switch (adminCredentials.get(username)) {
      case (null) { false };
      case (?storedPassword) { storedPassword == password };
    };
  };

  // Public queries
  public query ({ caller }) func getAllPosts() : async [Post] {
    posts.values().toArray().sort();
  };

  public query ({ caller }) func getPostsByCategory(category : PostCategory) : async [Post] {
    posts.values().toArray().filter(func(p) { p.category == category });
  };

  public query ({ caller }) func getPost(id : Nat) : async Post {
    switch (posts.get(id)) {
      case (null) { Runtime.trap("Post not found") };
      case (?post) { post };
    };
  };

  // Admin functions
  public shared ({ caller }) func createPost(username : Text, password : Text, title : Text, content : Text, author : Text, category : PostCategory) : async () {
    if (not authenticate(username, password)) {
      Runtime.trap("Authentication failed");
    };

    let newPost : Post = {
      id = nextPostId;
      title;
      content;
      author;
      date = Time.now();
      category;
    };

    posts.add(nextPostId, newPost);
    nextPostId += 1;
  };

  public shared ({ caller }) func updatePost(username : Text, password : Text, id : Nat, title : Text, content : Text, author : Text, category : PostCategory) : async () {
    if (not authenticate(username, password)) {
      Runtime.trap("Authentication failed");
    };

    switch (posts.get(id)) {
      case (null) { Runtime.trap("Post not found") };
      case (?_) {
        let updatedPost : Post = {
          id;
          title;
          content;
          author;
          date = Time.now();
          category;
        };
        posts.add(id, updatedPost);
      };
    };
  };

  public shared ({ caller }) func deletePost(username : Text, password : Text, id : Nat) : async () {
    if (not authenticate(username, password)) {
      Runtime.trap("Authentication failed");
    };

    if (not posts.containsKey(id)) {
      Runtime.trap("Post not found");
    };

    posts.remove(id);
  };
};
