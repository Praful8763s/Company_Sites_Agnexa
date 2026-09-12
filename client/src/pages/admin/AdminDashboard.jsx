import React, { useState, useEffect } from 'react';
import { 
  adminApi, contactApi, newsletterApi, careersApi, blogApi, portfolioApi, servicesApi 
} from '../../services/api';
import { useAuth } from '../../context/AuthContext';
import { 
  LayoutDashboard, MessageSquare, Mail, Briefcase, BookOpen, 
  FolderKanban, Users, ShieldAlert, CheckCircle2, AlertCircle, 
  Trash2, Plus, Edit2, ExternalLink, RefreshCw, X, ChevronRight 
} from 'lucide-react';
import SEO from '../../components/common/SEO';

export default function AdminDashboard() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');
  const [stats, setStats] = useState(null);
  const [contacts, setContacts] = useState([]);
  const [newsletters, setNewsletters] = useState([]);
  const [applications, setApplications] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [portfolio, setPortfolio] = useState([]);
  const [usersList, setUsersList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [statusFeedback, setStatusFeedback] = useState('');

  // Modals for CRUD
  const [showBlogModal, setShowBlogModal] = useState(false);
  const [editingBlog, setEditingBlog] = useState(null);
  const [blogForm, setBlogForm] = useState({
    title: '', slug: '', category: 'Technology', author: 'Agnexa Architect', excerpt: '', content: '', image: '', tags: 'AI, Cloud'
  });

  const [showProjectModal, setShowProjectModal] = useState(false);
  const [editingProject, setEditingProject] = useState(null);
  const [projectForm, setProjectForm] = useState({
    title: '', slug: '', industry: 'Technology', clientName: 'Enterprise Partner', challenge: '', solution: '', image: '', technologies: 'React, Node.js', metricValue: '99.9%', metricLabel: 'Uptime'
  });

  const loadAllData = async () => {
    setLoading(true);
    try {
      const [stRes, ctRes, nwRes, apRes, bgRes, pfRes, usRes] = await Promise.all([
        adminApi.getStats(),
        contactApi.getAll(),
        newsletterApi.getAll(),
        careersApi.getApplications(),
        blogApi.getAll(),
        portfolioApi.getAll(),
        adminApi.getUsers()
      ]);

      if (stRes.data.stats) setStats(stRes.data.stats);
      if (ctRes.data.contacts) setContacts(ctRes.data.contacts);
      if (nwRes.data.subscribers) setNewsletters(nwRes.data.subscribers);
      if (apRes.data.applications) setApplications(apRes.data.applications);
      if (bgRes.data.blogs) setBlogs(bgRes.data.blogs);
      if (pfRes.data.portfolio) setPortfolio(pfRes.data.portfolio);
      if (usRes.data.users) setUsersList(usRes.data.users);
    } catch (err) {
      console.warn('Error loading admin data:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadAllData();
  }, []);

  const flashMessage = (msg) => {
    setStatusFeedback(msg);
    setTimeout(() => setStatusFeedback(''), 3500);
  };

  // Contact status change handler
  const handleContactStatus = async (id, status) => {
    try {
      await contactApi.updateStatus(id, { status });
      setContacts(contacts.map(c => (c._id === id || c.id === id) ? { ...c, status } : c));
      flashMessage(`Enquiry marked as ${status}`);
    } catch (err) {
      alert('Failed to update status');
    }
  };

  const handleDeleteContact = async (id) => {
    if (!window.confirm('Delete this enquiry permanently?')) return;
    try {
      await contactApi.delete(id);
      setContacts(contacts.filter(c => c._id !== id && c.id !== id));
      flashMessage('Enquiry deleted');
    } catch (err) {
      alert('Delete failed');
    }
  };

  // Application status handler
  const handleAppStatus = async (id, status) => {
    try {
      await careersApi.updateStatus(id, status);
      setApplications(applications.map(a => (a._id === id || a.id === id) ? { ...a, status } : a));
      flashMessage(`Application updated to ${status}`);
    } catch (err) {
      alert('Failed to update candidate status');
    }
  };

  // Blog CRUD Handlers
  const handleOpenBlogModal = (b = null) => {
    if (b) {
      setEditingBlog(b);
      setBlogForm({
        title: b.title,
        slug: b.slug,
        category: b.category,
        author: b.author,
        excerpt: b.excerpt,
        content: b.content,
        image: b.image || '',
        tags: (b.tags || []).join(', ')
      });
    } else {
      setEditingBlog(null);
      setBlogForm({
        title: '', slug: '', category: 'Technology', author: 'Agnexa Architect', excerpt: '', content: '', image: '', tags: 'AI, Cloud'
      });
    }
    setShowBlogModal(true);
  };

  const handleSaveBlog = async (e) => {
    e.preventDefault();
    const payload = {
      ...blogForm,
      tags: blogForm.tags.split(',').map(t => t.trim()).filter(Boolean)
    };

    try {
      if (editingBlog) {
        await blogApi.update(editingBlog._id || editingBlog.id, payload);
        flashMessage('Article updated successfully');
      } else {
        await blogApi.create(payload);
        flashMessage('New article published');
      }
      setShowBlogModal(false);
      const res = await blogApi.getAll();
      if (res.data.blogs) setBlogs(res.data.blogs);
    } catch (err) {
      alert(err.response?.data?.message || 'Error saving article');
    }
  };

  const handleDeleteBlog = async (id) => {
    if (!window.confirm('Delete this article?')) return;
    try {
      await blogApi.delete(id);
      setBlogs(blogs.filter(b => b._id !== id && b.id !== id));
      flashMessage('Article removed');
    } catch (err) {
      alert('Failed to delete blog');
    }
  };

  // Portfolio CRUD Handlers
  const handleOpenProjectModal = (p = null) => {
    if (p) {
      setEditingProject(p);
      setProjectForm({
        title: p.title,
        slug: p.slug,
        industry: p.industry,
        clientName: p.clientName || 'Enterprise Partner',
        challenge: p.challenge,
        solution: p.solution,
        image: p.image || '',
        technologies: (p.technologies || []).join(', '),
        metricValue: p.results?.[0]?.metric || '99.9%',
        metricLabel: p.results?.[0]?.label || 'System Uptime'
      });
    } else {
      setEditingProject(null);
      setProjectForm({
        title: '', slug: '', industry: 'Healthcare', clientName: 'Enterprise Partner', challenge: '', solution: '', image: '', technologies: 'React, Node.js, AWS', metricValue: '99.98%', metricLabel: 'Uptime'
      });
    }
    setShowProjectModal(true);
  };

  const handleSaveProject = async (e) => {
    e.preventDefault();
    const payload = {
      title: projectForm.title,
      slug: projectForm.slug,
      industry: projectForm.industry,
      clientName: projectForm.clientName,
      challenge: projectForm.challenge,
      solution: projectForm.solution,
      image: projectForm.image || 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80',
      technologies: projectForm.technologies.split(',').map(t => t.trim()).filter(Boolean),
      results: [{ metric: projectForm.metricValue, label: projectForm.metricLabel }]
    };

    try {
      if (editingProject) {
        await portfolioApi.update(editingProject._id || editingProject.id, payload);
        flashMessage('Case study updated');
      } else {
        await portfolioApi.create(payload);
        flashMessage('Case study created');
      }
      setShowProjectModal(false);
      const res = await portfolioApi.getAll();
      if (res.data.portfolio) setPortfolio(res.data.portfolio);
    } catch (err) {
      alert(err.response?.data?.message || 'Error saving case study');
    }
  };

  const handleDeleteProject = async (id) => {
    if (!window.confirm('Delete this case study?')) return;
    try {
      await portfolioApi.delete(id);
      setPortfolio(portfolio.filter(p => p._id !== id && p.id !== id));
      flashMessage('Case study deleted');
    } catch (err) {
      alert('Failed to delete project');
    }
  };

  const handleToggleUserRole = async (userId, currentRole) => {
    const nextRole = currentRole === 'admin' ? 'user' : 'admin';
    if (!window.confirm(`Switch this user's role to ${nextRole}?`)) return;

    try {
      await adminApi.updateUserRole(userId, nextRole);
      setUsersList(usersList.map(u => u.id === userId ? { ...u, role: nextRole } : u));
      flashMessage(`User role updated to ${nextRole}`);
    } catch (err) {
      alert('Role update failed');
    }
  };

  return (
    <div className="relative pt-24 pb-20 min-h-screen">
      <SEO title="Admin Executive Center" description="Agnexa Technologies authenticated administrator control panel." />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-white/10">
          <div>
            <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-agnexa-orange-400">
              <ShieldAlert className="w-4 h-4" />
              <span>Agnexa Executive Administration</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              Operations & Enquiries Console
            </h1>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={loadAllData}
              className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-agnexa-blue-400 text-slate-300 hover:text-white transition-all flex items-center space-x-2 text-xs font-semibold"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
              <span>Refresh Data</span>
            </button>
            <div className="px-3.5 py-1.5 rounded-xl bg-agnexa-navy-850 border border-white/10 text-xs text-slate-300">
              Logged in: <span className="font-bold text-white">{user?.name}</span>
            </div>
          </div>
        </div>

        {/* Global Feedback Banner */}
        {statusFeedback && (
          <div className="my-4 p-3 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-xs font-bold flex items-center space-x-2 animate-in fade-in duration-150">
            <CheckCircle2 className="w-4 h-4 shrink-0" />
            <span>{statusFeedback}</span>
          </div>
        )}

        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-2 my-8 border-b border-white/10 pb-4">
          {[
            { id: 'overview', label: 'Overview & KPIs', icon: LayoutDashboard },
            { id: 'enquiries', label: `Enquiries (${contacts.length})`, icon: MessageSquare },
            { id: 'subscribers', label: `Subscribers (${newsletters.length})`, icon: Mail },
            { id: 'applications', label: `Careers (${applications.length})`, icon: Briefcase },
            { id: 'blog', label: `Articles (${blogs.length})`, icon: BookOpen },
            { id: 'portfolio', label: `Case Studies (${portfolio.length})`, icon: FolderKanban },
            { id: 'users', label: `Users (${usersList.length})`, icon: Users },
          ].map((tab) => {
            const Icon = tab.icon;
            const active = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold flex items-center space-x-2 transition-all ${
                  active
                    ? 'bg-agnexa-blue-500 text-white shadow-neon-blue'
                    : 'bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* 1. OVERVIEW TAB */}
        {activeTab === 'overview' && (
          <div className="space-y-8 animate-in fade-in duration-150">
            {/* KPI Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              <div className="p-5 rounded-2xl glass-card space-y-1">
                <span className="text-xs text-slate-400">Total Enquiries</span>
                <div className="text-2xl font-black text-white">{stats?.totalEnquiries || contacts.length}</div>
              </div>
              <div className="p-5 rounded-2xl glass-card glass-card-orange space-y-1">
                <span className="text-xs text-agnexa-orange-400 font-bold">New RFPs</span>
                <div className="text-2xl font-black text-agnexa-orange-400">{stats?.newEnquiries || contacts.filter(c => c.status === 'New').length}</div>
              </div>
              <div className="p-5 rounded-2xl glass-card space-y-1">
                <span className="text-xs text-slate-400">Newsletter</span>
                <div className="text-2xl font-black text-emerald-400">{stats?.totalSubscribers || newsletters.length}</div>
              </div>
              <div className="p-5 rounded-2xl glass-card space-y-1">
                <span className="text-xs text-slate-400">Applications</span>
                <div className="text-2xl font-black text-cyan-400">{stats?.totalApplications || applications.length}</div>
              </div>
              <div className="p-5 rounded-2xl glass-card space-y-1">
                <span className="text-xs text-slate-400">Published Blogs</span>
                <div className="text-2xl font-black text-white">{blogs.length}</div>
              </div>
              <div className="p-5 rounded-2xl glass-card space-y-1">
                <span className="text-xs text-slate-400">Total Users</span>
                <div className="text-2xl font-black text-white">{usersList.length}</div>
              </div>
            </div>

            {/* Quick Actions & Recent Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-8 p-6 rounded-3xl glass-card space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-white/10">
                  <h3 className="text-base font-bold text-white">Latest Inbound Enquiries</h3>
                  <button onClick={() => setActiveTab('enquiries')} className="text-xs text-agnexa-blue-400 hover:underline">
                    View All
                  </button>
                </div>

                <div className="space-y-3">
                  {contacts.slice(0, 4).map((c) => (
                    <div key={c._id || c.id} className="p-4 rounded-xl bg-white/5 flex items-center justify-between gap-4">
                      <div>
                        <div className="font-bold text-white text-sm">{c.fullName}</div>
                        <div className="text-xs text-slate-400">{c.company || 'Private'} • {c.service}</div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className={`text-[10px] font-bold uppercase px-2.5 py-1 rounded-full ${
                          c.status === 'New' ? 'bg-agnexa-orange-500/20 text-agnexa-orange-400' :
                          c.status === 'Converted' ? 'bg-emerald-500/20 text-emerald-400' :
                          'bg-agnexa-blue-500/20 text-agnexa-blue-400'
                        }`}>
                          {c.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-4 p-6 rounded-3xl glass-card space-y-4">
                <h3 className="text-base font-bold text-white pb-2 border-b border-white/10">Quick Publishing</h3>
                <div className="space-y-3">
                  <button
                    onClick={() => { setActiveTab('blog'); handleOpenBlogModal(); }}
                    className="w-full p-3 rounded-xl bg-agnexa-blue-500/20 border border-agnexa-blue-500/40 text-agnexa-blue-300 hover:bg-agnexa-blue-500 hover:text-white text-xs font-bold flex items-center justify-between transition-all"
                  >
                    <span>Publish Engineering Article</span>
                    <Plus className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => { setActiveTab('portfolio'); handleOpenProjectModal(); }}
                    className="w-full p-3 rounded-xl bg-agnexa-orange-500/20 border border-agnexa-orange-500/40 text-agnexa-orange-400 hover:bg-agnexa-orange-500 hover:text-white text-xs font-bold flex items-center justify-between transition-all"
                  >
                    <span>Add Portfolio Case Study</span>
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 2. ENQUIRIES TAB */}
        {activeTab === 'enquiries' && (
          <div className="space-y-4 animate-in fade-in duration-150">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-white">Client Inbound Inquiries</h2>
              <span className="text-xs text-slate-400">Total: {contacts.length}</span>
            </div>

            <div className="space-y-4">
              {contacts.map((c) => (
                <div key={c._id || c.id} className="p-6 rounded-2xl glass-card space-y-3 border border-white/10">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-3">
                    <div>
                      <div className="text-base font-bold text-white">{c.fullName}</div>
                      <div className="text-xs text-slate-300">{c.email} • {c.phone || 'No phone'} • {c.company || 'Individual'}</div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <select
                        value={c.status}
                        onChange={(e) => handleContactStatus(c._id || c.id, e.target.value)}
                        className="px-3 py-1.5 rounded-lg bg-agnexa-navy-950 border border-white/15 text-xs text-white focus:outline-none"
                      >
                        <option value="New">New</option>
                        <option value="Contacted">Contacted</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Converted">Converted</option>
                        <option value="Closed">Closed</option>
                      </select>

                      <button
                        onClick={() => handleDeleteContact(c._id || c.id)}
                        className="p-1.5 rounded-lg text-slate-400 hover:text-rose-400 hover:bg-rose-500/10"
                        title="Delete enquiry"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs text-slate-400">
                    <div><strong className="text-slate-200">Service:</strong> {c.service}</div>
                    <div><strong className="text-slate-200">Budget:</strong> {c.budget}</div>
                    <div><strong className="text-slate-200">Timeline:</strong> {c.timeline}</div>
                  </div>

                  <p className="text-xs text-slate-200 bg-white/5 p-3 rounded-xl leading-relaxed">
                    {c.message}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 3. SUBSCRIBERS TAB */}
        {activeTab === 'subscribers' && (
          <div className="space-y-4 animate-in fade-in duration-150">
            <h2 className="text-lg font-bold text-white">Newsletter Subscriber Registry</h2>
            <div className="p-6 rounded-2xl glass-card">
              <div className="space-y-2">
                {newsletters.map((s) => (
                  <div key={s._id || s.id} className="p-3 rounded-xl bg-white/5 flex items-center justify-between text-xs">
                    <span className="text-white font-medium">{s.email}</span>
                    <span className="text-emerald-400 font-bold uppercase">{s.status}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 4. CAREERS TAB */}
        {activeTab === 'applications' && (
          <div className="space-y-4 animate-in fade-in duration-150">
            <h2 className="text-lg font-bold text-white">Job Applications Received</h2>
            <div className="space-y-4">
              {applications.map((app) => (
                <div key={app._id || app.id} className="p-6 rounded-2xl glass-card space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-3">
                    <div>
                      <div className="text-base font-bold text-white">{app.fullName}</div>
                      <div className="text-xs text-slate-300">{app.email} • {app.phone} • {app.role}</div>
                    </div>

                    <select
                      value={app.status}
                      onChange={(e) => handleAppStatus(app._id || app.id, e.target.value)}
                      className="px-3 py-1.5 rounded-lg bg-agnexa-navy-950 border border-white/15 text-xs text-white"
                    >
                      <option value="Reviewing">Reviewing</option>
                      <option value="Shortlisted">Shortlisted</option>
                      <option value="Interview Scheduled">Interview Scheduled</option>
                      <option value="Hired">Hired</option>
                      <option value="Rejected">Rejected</option>
                    </select>
                  </div>

                  <div className="text-xs text-slate-300 space-y-1">
                    <div><strong>Experience:</strong> {app.experience}</div>
                    {app.portfolioUrl && (
                      <div>
                        <strong>Portfolio:</strong>{' '}
                        <a href={app.portfolioUrl} target="_blank" rel="noreferrer" className="text-agnexa-blue-400 hover:underline">
                          {app.portfolioUrl}
                        </a>
                      </div>
                    )}
                    {app.resumeNotes && (
                      <p className="p-2.5 rounded-lg bg-white/5 mt-2 text-slate-200">
                        {app.resumeNotes}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 5. BLOG TAB */}
        {activeTab === 'blog' && (
          <div className="space-y-4 animate-in fade-in duration-150">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-white">Engineering Articles & Insights</h2>
              <button
                onClick={() => handleOpenBlogModal()}
                className="px-4 py-2 rounded-xl bg-agnexa-blue-500 text-white text-xs font-bold uppercase tracking-wider flex items-center space-x-1.5 shadow-neon-blue"
              >
                <Plus className="w-4 h-4" />
                <span>New Article</span>
              </button>
            </div>

            <div className="space-y-3">
              {blogs.map((b) => (
                <div key={b._id || b.id} className="p-5 rounded-2xl glass-card flex items-center justify-between gap-4">
                  <div>
                    <span className="text-[10px] font-bold uppercase text-agnexa-orange-400">{b.category}</span>
                    <h4 className="text-base font-bold text-white leading-tight">{b.title}</h4>
                    <p className="text-xs text-slate-400 line-clamp-1 mt-0.5">{b.excerpt}</p>
                  </div>
                  
                  <div className="flex items-center space-x-2 shrink-0">
                    <button
                      onClick={() => handleOpenBlogModal(b)}
                      className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300"
                    >
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDeleteBlog(b._id || b.id)}
                      className="p-2 rounded-lg bg-rose-500/10 text-rose-400 hover:bg-rose-500/20"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 6. PORTFOLIO TAB */}
        {activeTab === 'portfolio' && (
          <div className="space-y-4 animate-in fade-in duration-150">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-white">Portfolio Case Studies</h2>
              <button
                onClick={() => handleOpenProjectModal()}
                className="px-4 py-2 rounded-xl bg-agnexa-orange-500 text-white text-xs font-bold uppercase tracking-wider flex items-center space-x-1.5 shadow-neon-orange"
              >
                <Plus className="w-4 h-4" />
                <span>New Case Study</span>
              </button>
            </div>

            <div className="space-y-3">
              {portfolio.map((p) => (
                <div key={p._id || p.id} className="p-5 rounded-2xl glass-card flex items-center justify-between gap-4">
                  <div>
                    <span className="text-[10px] font-bold uppercase text-agnexa-blue-400">{p.industry}</span>
                    <h4 className="text-base font-bold text-white leading-tight">{p.title}</h4>
                    <p className="text-xs text-slate-400 line-clamp-1 mt-0.5">{p.solution}</p>
                  </div>

                  <div className="flex items-center space-x-2 shrink-0">
                    <button
                      onClick={() => handleOpenProjectModal(p)}
                      className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300"
                    >
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDeleteProject(p._id || p.id)}
                      className="p-2 rounded-lg bg-rose-500/10 text-rose-400 hover:bg-rose-500/20"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 7. USERS TAB */}
        {activeTab === 'users' && (
          <div className="space-y-4 animate-in fade-in duration-150">
            <h2 className="text-lg font-bold text-white">System Registered Users</h2>
            <div className="space-y-3">
              {usersList.map((u) => (
                <div key={u.id} className="p-4 rounded-2xl glass-card flex items-center justify-between text-xs">
                  <div>
                    <div className="text-sm font-bold text-white">{u.name}</div>
                    <div className="text-slate-400">{u.email} • {u.company || 'Enterprise User'}</div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <span className={`px-2.5 py-1 rounded-full uppercase font-bold text-[10px] ${
                      u.role === 'admin' ? 'bg-agnexa-orange-500/20 text-agnexa-orange-400' : 'bg-white/10 text-slate-300'
                    }`}>
                      {u.role}
                    </span>
                    <button
                      onClick={() => handleToggleUserRole(u.id, u.role)}
                      className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white"
                    >
                      Toggle Role
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

      {/* Blog Create/Edit Modal */}
      {showBlogModal && (
        <div className="fixed inset-0 z-50 bg-agnexa-navy-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-agnexa-navy-900 border border-white/10 rounded-3xl p-6 sm:p-8 max-w-xl w-full relative shadow-2xl max-h-[90vh] overflow-y-auto">
            <button onClick={() => setShowBlogModal(false)} className="absolute top-5 right-5 text-slate-400 hover:text-white">
              <X className="w-5 h-5" />
            </button>
            <h3 className="text-xl font-bold text-white mb-4">
              {editingBlog ? 'Edit Engineering Article' : 'New Engineering Article'}
            </h3>

            <form onSubmit={handleSaveBlog} className="space-y-4">
              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">Title *</label>
                <input
                  type="text"
                  required
                  value={blogForm.title}
                  onChange={(e) => setBlogForm({ ...blogForm, title: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">Slug *</label>
                  <input
                    type="text"
                    required
                    value={blogForm.slug}
                    onChange={(e) => setBlogForm({ ...blogForm, slug: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">Category</label>
                  <input
                    type="text"
                    value={blogForm.category}
                    onChange={(e) => setBlogForm({ ...blogForm, category: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">Excerpt *</label>
                <textarea
                  rows="2"
                  required
                  value={blogForm.excerpt}
                  onChange={(e) => setBlogForm({ ...blogForm, excerpt: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">Content Body (Markdown supported) *</label>
                <textarea
                  rows="6"
                  required
                  value={blogForm.content}
                  onChange={(e) => setBlogForm({ ...blogForm, content: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs font-mono"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">Tags (Comma separated)</label>
                <input
                  type="text"
                  value={blogForm.tags}
                  onChange={(e) => setBlogForm({ ...blogForm, tags: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-agnexa-blue-500 text-white font-bold text-xs uppercase tracking-wider"
              >
                Save Article
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Portfolio Create/Edit Modal */}
      {showProjectModal && (
        <div className="fixed inset-0 z-50 bg-agnexa-navy-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-agnexa-navy-900 border border-white/10 rounded-3xl p-6 sm:p-8 max-w-xl w-full relative shadow-2xl max-h-[90vh] overflow-y-auto">
            <button onClick={() => setShowProjectModal(false)} className="absolute top-5 right-5 text-slate-400 hover:text-white">
              <X className="w-5 h-5" />
            </button>
            <h3 className="text-xl font-bold text-white mb-4">
              {editingProject ? 'Edit Case Study' : 'New Case Study'}
            </h3>

            <form onSubmit={handleSaveProject} className="space-y-4">
              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">Project Title *</label>
                <input
                  type="text"
                  required
                  value={projectForm.title}
                  onChange={(e) => setProjectForm({ ...projectForm, title: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">Slug *</label>
                  <input
                    type="text"
                    required
                    value={projectForm.slug}
                    onChange={(e) => setProjectForm({ ...projectForm, slug: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">Industry</label>
                  <input
                    type="text"
                    value={projectForm.industry}
                    onChange={(e) => setProjectForm({ ...projectForm, industry: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">Challenge *</label>
                <textarea
                  rows="3"
                  required
                  value={projectForm.challenge}
                  onChange={(e) => setProjectForm({ ...projectForm, challenge: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">Solution Architecture *</label>
                <textarea
                  rows="3"
                  required
                  value={projectForm.solution}
                  onChange={(e) => setProjectForm({ ...projectForm, solution: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">Metric Value</label>
                  <input
                    type="text"
                    value={projectForm.metricValue}
                    onChange={(e) => setProjectForm({ ...projectForm, metricValue: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">Metric Label</label>
                  <input
                    type="text"
                    value={projectForm.metricLabel}
                    onChange={(e) => setProjectForm({ ...projectForm, metricLabel: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-agnexa-orange-500 text-white font-bold text-xs uppercase tracking-wider"
              >
                Save Case Study
              </button>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
