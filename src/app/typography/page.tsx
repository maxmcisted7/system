import tokens from '../../tokens/tokens.json';

const fontFamilies = tokens.fontFamily || {};
const fontSizes = tokens.fontSize || {};
const fontWeights = tokens.fontWeight || {};

export default function TypographyPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">Typography</h1>
      <p className="mb-8 text-gray-600">Font families, sizes, and weights from the design system, with live samples.</p>
      <div className="mb-10">
        <h2 className="text-xl font-semibold mb-2">Font Families</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {Object.entries(fontFamilies).map(([name, value]) => (
            <div key={name} className="p-4 border rounded bg-white">
              <div className="text-lg mb-1" style={{ fontFamily: value as string }}>The quick brown fox jumps over the lazy dog</div>
              <div className="text-xs text-gray-700">{name}</div>
              <div className="text-xs text-gray-400">{value as string}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="mb-10">
        <h2 className="text-xl font-semibold mb-2">Font Sizes</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {Object.entries(fontSizes).map(([name, value]) => (
            <div key={name} className="p-4 border rounded bg-white flex flex-col items-center">
              <div className="mb-1" style={{ fontSize: value as string }}>Aa</div>
              <div className="text-xs text-gray-700">{name}</div>
              <div className="text-xs text-gray-400">{value as string}</div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-2">Font Weights</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {Object.entries(fontWeights).map(([name, value]) => (
            <div key={name} className="p-4 border rounded bg-white flex flex-col items-center">
              <div className="mb-1" style={{ fontWeight: value as string }}>Aa</div>
              <div className="text-xs text-gray-700">{name}</div>
              <div className="text-xs text-gray-400">{value as string}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 