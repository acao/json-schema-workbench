import { JSONSchemaEditor } from "@/components/editor/json-schema-editor"
import { JSONValueEditor } from "@/components/editor/json-value-editor"

export default function IndexPage() {
  return (
    <section className="grid h-[90vh] w-full grid-cols-2 gap-2 pb-8">
      <div id="json-schema-editor" className="h-full overflow-scroll">
        <JSONSchemaEditor />
      </div>
      <div id="json-value-editor" className="h-full overflow-scroll">
        <JSONValueEditor />
      </div>
    </section>
  )
}
