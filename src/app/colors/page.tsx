import tokens from '../../tokens/tokens.json';

const colorFamilies = tokens.colors?.base || {};

export default function ColorsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">Colors</h1>
      <p className="mb-8 text-gray-600">All color tokens in the design system, visualized as swatches. Click a swatch to copy its value.</p>
      <div className="space-y-10">
        {Object.entries(colorFamilies).map(([family, shades]) => (
          <div key={family}>
            <h2 className="text-xl font-semibold mb-4 capitalize">{family}</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-6">
              {Object.entries(shades as Record<string, any>).map(([shade, data]) => (
                <div key={shade} className="flex flex-col items-center group cursor-pointer">
                  <div
                    className="w-16 h-16 rounded shadow border border-gray-200 mb-2 transition hover:scale-105"
                    style={{ background: data.value }}
                    title={data.value}
                    onClick={() => navigator.clipboard.writeText(data.value)}
                  />
                  <div className="text-xs font-mono text-gray-700 group-hover:text-blue-600">{family}.{shade}</div>
                  <div className="text-xs text-gray-400">{data.value}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 