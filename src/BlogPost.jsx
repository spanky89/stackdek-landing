import { useParams, Link, Navigate } from 'react-router-dom';
import { getArticleBySlug } from './blog/index';

export default function BlogPost() {
  const { slug } = useParams();
  const article = getArticleBySlug(slug);

  if (!article) {
    return <Navigate to="/blog" replace />;
  }

  const { Component, title, description, publishedDate, author, readTime } = article;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link to="/blog" className="text-blue-600 hover:text-blue-700 font-medium">
            ← Back to Blog
          </Link>
        </div>
      </header>

      {/* Article Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {title}
          </h1>
          
          <p className="text-xl text-gray-600 mb-6">
            {description}
          </p>
          
          <div className="flex items-center text-sm text-gray-500">
            <span>{author}</span>
            <span className="mx-2">•</span>
            <time dateTime={publishedDate}>
              {new Date(publishedDate).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
            <span className="mx-2">•</span>
            <span>{readTime} read</span>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-sm p-8 md:p-12">
          <Component />
        </div>

        {/* Related Articles CTA */}
        <div className="mt-12 text-center">
          <Link 
            to="/blog"
            className="inline-block text-blue-600 hover:text-blue-700 font-medium"
          >
            ← Read more articles
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-sm text-gray-500">
            <Link to="/" className="hover:text-blue-600">Home</Link>
            <span className="mx-2">•</span>
            <Link to="/blog" className="hover:text-blue-600">Blog</Link>
            <span className="mx-2">•</span>
            <Link to="/privacy" className="hover:text-blue-600">Privacy</Link>
            <span className="mx-2">•</span>
            <Link to="/terms" className="hover:text-blue-600">Terms</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
