import {
  ChevronDown,
  ChevronUp,
  Edit2,
  Loader2,
  Plus,
  Trash2,
  X,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { PostCategory } from "../backend.d";
import type { Post } from "../backend.d";
import {
  useCreatePost,
  useDeletePost,
  useGetPostsByCategory,
  useUpdatePost,
} from "../hooks/useQueries";

// ─── Types ───────────────────────────────────────────────────────────────────

interface AdminState {
  isLoggedIn: boolean;
  username: string;
  password: string;
  loginUsername: string;
  loginPassword: string;
}

interface EditForm {
  id: bigint | null;
  title: string;
  content: string;
  author: string;
  category: PostCategory;
}

const EMPTY_FORM: EditForm = {
  id: null,
  title: "",
  content: "",
  author: "",
  category: PostCategory.blog,
};

// ─── Post Card ───────────────────────────────────────────────────────────────

function PostCard({
  post,
  adminState,
  onEdit,
  onDelete,
}: {
  post: Post;
  adminState: AdminState;
  onEdit: (post: Post) => void;
  onDelete: (id: bigint) => void;
}) {
  const [expanded, setExpanded] = useState(false);
  const date = new Date(Number(post.date / 1_000_000n)).toLocaleDateString(
    "en-IN",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    },
  );

  return (
    <div className="gold-card rounded-lg overflow-hidden">
      <div className="p-5">
        {/* Category badge + date */}
        <div className="flex items-center justify-between mb-3">
          <span
            className="text-xs px-2.5 py-0.5 rounded font-cinzel uppercase tracking-widest"
            style={{
              background:
                post.category === PostCategory.notice
                  ? "rgba(180,140,20,0.1)"
                  : "rgba(99,102,241,0.1)",
              border:
                post.category === PostCategory.notice
                  ? "1px solid rgba(180,140,20,0.3)"
                  : "1px solid rgba(99,102,241,0.3)",
              color:
                post.category === PostCategory.notice ? "#9a7b1a" : "#5b52d4",
            }}
          >
            {post.category === PostCategory.notice ? "Notice" : "Blog"}
          </span>
          <span
            className="font-jost text-xs"
            style={{ color: "rgba(154,123,26,0.6)" }}
          >
            {date}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-cinzel text-base font-semibold text-gold mb-1 leading-snug">
          {post.title}
        </h3>

        {/* Author */}
        <p
          className="font-jost text-xs mb-3"
          style={{ color: "rgba(154,123,26,0.6)" }}
        >
          By {post.author}
        </p>

        {/* Content preview or full */}
        <p
          className="font-jost text-sm leading-relaxed"
          style={{ color: "#6b5a3a" }}
        >
          {expanded
            ? post.content
            : post.content.slice(0, 180) +
              (post.content.length > 180 ? "…" : "")}
        </p>

        {/* Toggle */}
        <div className="flex items-center justify-between mt-4">
          {post.content.length > 180 && (
            <button
              type="button"
              onClick={() => setExpanded(!expanded)}
              className="flex items-center gap-1 font-cinzel text-xs transition-colors hover:text-gold-bright"
              style={{ color: "rgba(154,123,26,0.8)" }}
            >
              {expanded ? (
                <>
                  Show Less <ChevronUp size={13} />
                </>
              ) : (
                <>
                  Read More <ChevronDown size={13} />
                </>
              )}
            </button>
          )}
          {!post.content.length && <span />}

          {/* Admin actions */}
          {adminState.isLoggedIn && (
            <div className="flex gap-2 ml-auto">
              <button
                type="button"
                onClick={() => onEdit(post)}
                className="p-1.5 rounded transition-colors hover:bg-black/5"
                style={{ color: "rgba(154,123,26,0.7)" }}
                title="Edit"
              >
                <Edit2 size={13} />
              </button>
              <button
                type="button"
                onClick={() => onDelete(post.id)}
                className="p-1.5 rounded transition-colors hover:bg-red-900/30"
                style={{ color: "rgba(239,68,68,0.6)" }}
                title="Delete"
              >
                <Trash2 size={13} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── Main Section ─────────────────────────────────────────────────────────────

interface BlogSectionProps {
  showAdmin: boolean;
  setShowAdmin: (v: boolean) => void;
}

export function BlogSection({ showAdmin, setShowAdmin }: BlogSectionProps) {
  const [activeTab, setActiveTab] = useState<PostCategory>(PostCategory.notice);
  const [adminState, setAdminState] = useState<AdminState>({
    isLoggedIn: false,
    username: "",
    password: "",
    loginUsername: "",
    loginPassword: "",
  });
  const [form, setForm] = useState<EditForm>(EMPTY_FORM);
  const [showForm, setShowForm] = useState(false);

  const { data: posts = [], isLoading } = useGetPostsByCategory(activeTab);
  const createPost = useCreatePost();
  const updatePost = useUpdatePost();
  const deletePost = useDeletePost();

  const handleLogin = () => {
    if (adminState.loginUsername.trim() && adminState.loginPassword.trim()) {
      setAdminState((prev) => ({
        ...prev,
        isLoggedIn: true,
        username: prev.loginUsername,
        password: prev.loginPassword,
      }));
      toast.success("Admin access granted");
    } else {
      toast.error("Please enter credentials");
    }
  };

  const handleLogout = () => {
    setAdminState({
      isLoggedIn: false,
      username: "",
      password: "",
      loginUsername: "",
      loginPassword: "",
    });
    setShowForm(false);
    setShowAdmin(false);
  };

  const handleSubmit = async () => {
    if (!form.title.trim() || !form.content.trim() || !form.author.trim()) {
      toast.error("Please fill all fields");
      return;
    }
    try {
      if (form.id !== null) {
        await updatePost.mutateAsync({
          username: adminState.username,
          password: adminState.password,
          id: form.id,
          title: form.title,
          content: form.content,
          author: form.author,
          category: form.category,
        });
        toast.success("Post updated");
      } else {
        await createPost.mutateAsync({
          username: adminState.username,
          password: adminState.password,
          title: form.title,
          content: form.content,
          author: form.author,
          category: form.category,
        });
        toast.success("Post created");
      }
      setForm(EMPTY_FORM);
      setShowForm(false);
    } catch {
      toast.error("Operation failed. Check credentials.");
    }
  };

  const handleDelete = async (id: bigint) => {
    if (!confirm("Delete this post?")) return;
    try {
      await deletePost.mutateAsync({
        username: adminState.username,
        password: adminState.password,
        id,
      });
      toast.success("Post deleted");
    } catch {
      toast.error("Delete failed. Check credentials.");
    }
  };

  const handleEdit = (post: Post) => {
    setForm({
      id: post.id,
      title: post.title,
      content: post.content,
      author: post.author,
      category: post.category,
    });
    setShowForm(true);
  };

  const isPending = createPost.isPending || updatePost.isPending;

  return (
    <section id="blog" className="py-24 px-4 relative">
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, #faf7f2 0%, #f5f0e8 50%, #faf7f2 100%)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <p
            className="font-cinzel text-xs tracking-[0.4em] uppercase mb-4"
            style={{ color: "rgba(154,123,26,0.7)" }}
          >
            Latest Updates
          </p>
          <h2 className="section-heading text-3xl sm:text-4xl md:text-5xl text-gold-gradient mb-4">
            Blog & Notice Board
          </h2>
          <div className="section-divider max-w-xs mx-auto">
            <span className="text-gold text-sm">✦</span>
          </div>
        </div>

        {/* Admin Panel */}
        {showAdmin && (
          <div
            className="mb-10 rounded-lg overflow-hidden animate-fade-in"
            style={{
              background: "#ffffff",
              border: "1px solid rgba(180,140,20,0.3)",
            }}
          >
            <div
              className="flex items-center justify-between p-4 border-b"
              style={{ borderColor: "rgba(180,140,20,0.2)" }}
            >
              <span className="font-cinzel text-sm text-gold tracking-widest uppercase">
                Admin Panel
              </span>
              <button
                type="button"
                onClick={() => setShowAdmin(false)}
                className="p-1 rounded hover:bg-black/5 transition-colors"
                style={{ color: "rgba(154,123,26,0.6)" }}
              >
                <X size={16} />
              </button>
            </div>

            {!adminState.isLoggedIn ? (
              /* Login form */
              <div className="p-6 space-y-4 max-w-sm">
                <p className="font-jost text-sm" style={{ color: "#6b5a3a" }}>
                  Enter admin credentials to manage posts.
                </p>
                <input
                  className="w-full px-4 py-2.5 rounded text-sm font-jost focus:outline-none"
                  placeholder="Username"
                  value={adminState.loginUsername}
                  onChange={(e) =>
                    setAdminState((prev) => ({
                      ...prev,
                      loginUsername: e.target.value,
                    }))
                  }
                  style={{
                    background: "#f5f0e8",
                    border: "1px solid rgba(180,140,20,0.25)",
                    color: "#2c2416",
                  }}
                />
                <input
                  type="password"
                  className="w-full px-4 py-2.5 rounded text-sm font-jost focus:outline-none"
                  placeholder="Password"
                  value={adminState.loginPassword}
                  onChange={(e) =>
                    setAdminState((prev) => ({
                      ...prev,
                      loginPassword: e.target.value,
                    }))
                  }
                  onKeyDown={(e) => {
                    if (e.key === "Enter") handleLogin();
                  }}
                  style={{
                    background: "#f5f0e8",
                    border: "1px solid rgba(180,140,20,0.25)",
                    color: "#2c2416",
                  }}
                />
                <button
                  type="button"
                  onClick={handleLogin}
                  className="btn-gold w-full py-2.5 rounded text-sm font-cinzel"
                >
                  Login
                </button>
              </div>
            ) : (
              /* Admin controls */
              <div className="p-6 space-y-6">
                <div className="flex items-center justify-between">
                  <p className="font-jost text-sm" style={{ color: "#9a7b1a" }}>
                    Logged in as <strong>{adminState.username}</strong>
                  </p>
                  <div className="flex gap-3">
                    <button
                      type="button"
                      onClick={() => {
                        setForm(EMPTY_FORM);
                        setShowForm(!showForm);
                      }}
                      className="btn-gold flex items-center gap-2 px-4 py-2 rounded text-xs font-cinzel"
                    >
                      <Plus size={13} />
                      New Post
                    </button>
                    <button
                      type="button"
                      onClick={handleLogout}
                      className="px-4 py-2 rounded text-xs font-cinzel transition-colors"
                      style={{
                        border: "1px solid rgba(154,123,26,0.3)",
                        color: "rgba(154,123,26,0.7)",
                      }}
                    >
                      Logout
                    </button>
                  </div>
                </div>

                {/* Create/Edit form */}
                {showForm && (
                  <div
                    className="space-y-4 rounded p-5"
                    style={{
                      background: "#f9f5ee",
                      border: "1px solid rgba(180,140,20,0.2)",
                    }}
                  >
                    <h4 className="font-cinzel text-sm text-gold">
                      {form.id !== null ? "Edit Post" : "Create New Post"}
                    </h4>
                    <input
                      className="w-full px-4 py-2.5 rounded text-sm font-jost focus:outline-none"
                      placeholder="Title"
                      value={form.title}
                      onChange={(e) =>
                        setForm((prev) => ({ ...prev, title: e.target.value }))
                      }
                      style={{
                        background: "#f5f0e8",
                        border: "1px solid rgba(180,140,20,0.25)",
                        color: "#2c2416",
                      }}
                    />
                    <input
                      className="w-full px-4 py-2.5 rounded text-sm font-jost focus:outline-none"
                      placeholder="Author name"
                      value={form.author}
                      onChange={(e) =>
                        setForm((prev) => ({
                          ...prev,
                          author: e.target.value,
                        }))
                      }
                      style={{
                        background: "#f5f0e8",
                        border: "1px solid rgba(180,140,20,0.25)",
                        color: "#2c2416",
                      }}
                    />
                    <select
                      className="w-full px-4 py-2.5 rounded text-sm font-jost focus:outline-none"
                      value={form.category}
                      onChange={(e) =>
                        setForm((prev) => ({
                          ...prev,
                          category: e.target.value as PostCategory,
                        }))
                      }
                      style={{
                        background: "#f5f0e8",
                        border: "1px solid rgba(180,140,20,0.25)",
                        color: "#2c2416",
                      }}
                    >
                      <option value={PostCategory.notice}>Notice</option>
                      <option value={PostCategory.blog}>Blog</option>
                    </select>
                    <textarea
                      className="w-full px-4 py-2.5 rounded text-sm font-jost focus:outline-none resize-none"
                      placeholder="Content"
                      rows={5}
                      value={form.content}
                      onChange={(e) =>
                        setForm((prev) => ({
                          ...prev,
                          content: e.target.value,
                        }))
                      }
                      style={{
                        background: "#f5f0e8",
                        border: "1px solid rgba(180,140,20,0.25)",
                        color: "#2c2416",
                      }}
                    />
                    <div className="flex gap-3">
                      <button
                        type="button"
                        onClick={handleSubmit}
                        disabled={isPending}
                        className="btn-gold flex items-center gap-2 px-5 py-2 rounded text-sm font-cinzel disabled:opacity-60"
                      >
                        {isPending && (
                          <Loader2 size={13} className="animate-spin" />
                        )}
                        {form.id !== null ? "Save Changes" : "Publish Post"}
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setShowForm(false);
                          setForm(EMPTY_FORM);
                        }}
                        className="px-5 py-2 rounded text-sm font-cinzel transition-colors"
                        style={{
                          border: "1px solid rgba(180,140,20,0.25)",
                          color: "rgba(154,123,26,0.7)",
                        }}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* Tabs */}
        <div className="flex gap-2 mb-8">
          {[
            { label: "Notices", val: PostCategory.notice },
            { label: "Blog", val: PostCategory.blog },
          ].map((tab) => (
            <button
              type="button"
              key={tab.val}
              onClick={() => setActiveTab(tab.val)}
              className={`px-6 py-2.5 rounded text-sm font-cinzel tracking-widest uppercase transition-all duration-200 ${
                activeTab === tab.val ? "blog-tab-active" : ""
              }`}
              style={
                activeTab !== tab.val
                  ? {
                      border: "1px solid rgba(180,140,20,0.3)",
                      color: "rgba(154,123,26,0.7)",
                    }
                  : undefined
              }
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Posts */}
        {isLoading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="animate-spin text-gold" size={32} />
          </div>
        ) : posts.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-4xl mb-4">✦</div>
            <p
              className="font-cinzel text-sm tracking-widest uppercase"
              style={{ color: "rgba(154,123,26,0.5)" }}
            >
              No {activeTab === PostCategory.notice ? "notices" : "posts"} yet
            </p>
            <p className="font-jost text-sm mt-2" style={{ color: "#8a7660" }}>
              Check back soon for updates from Astropules.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {posts.map((post) => (
              <PostCard
                key={post.id.toString()}
                post={post}
                adminState={adminState}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
