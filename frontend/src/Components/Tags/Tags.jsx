import './Tags.css'

function Tags({ tags }) {
  return (
    <div className="tags">
      {tags.map(tag => (
        <span key={tag}>
          {tag}
        </span>
      ))}
    </div>
  )
}

export default Tags