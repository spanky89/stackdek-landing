import { Link } from 'react-router-dom';
import { articles } from './blog/index';

export default function BlogIndex() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link to="/" className="text-blue-600 hover:text-blue-700 font-medium">
            ← Back to StackDek
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mt-4">
            Contractor CRM Blog
          </h1>
          <p className="text-xl text-gray-600 mt-2">
            Guides, comparisons, and best practices for running your contracting business.
          </p>
        </div>
      </header>

      {/* Article Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article key={article.slug} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
              <Link to={`/blog/${article.slug}`} className="block">
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <time dateTime={article.publishedDate}>
                      {new Date(article.publishedDate).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </time>
                    <span className="mx-2">•</span>
                    <span>{article.readTime} read</span>
                  </div>
                  
                  <h2 className="text-2xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition">
                    {article.title}
                  </h2>
                  
                  <p className="text-gray-600 mb-4">
                    {article.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {article.keywords.slice(0, 3).map((keyword) => (
                      <span 
                        key={keyword}
                        className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <p className="text-gray-600 mb-4">
              Ready to streamline your contracting business?
            </p>
            <a
              href="https://app.stackdek.com"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Try StackDek Free →
            </a>
          </div>
          <div className="mt-8 text-center text-sm text-gray-500">
            <Link to="/" className="hover:text-blue-600">Home</Link>
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
