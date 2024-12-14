import React, { useEffect } from 'react';
import BpmnJS from 'bpmn-js/lib/Modeler';

const WorkflowViewer = ({ bpmnXML }) => {
  useEffect(() => {
    const container = document.getElementById('bpmn-container');
    const viewer = new BpmnJS({ container });

    const loadBpmnDiagram = async () => {
      try {
        await viewer.importXML(bpmnXML);
        console.log('BPMN diagram rendered successfully.');
      } catch (err) {
        console.error('Error loading BPMN 2.0 XML', err);
        alert('Failed to render BPMN diagram. Please check the XML.');
      }
    };

    loadBpmnDiagram();

    // Cleanup viewer instance on component unmount
    return () => {
      viewer.destroy();
    };
  }, [bpmnXML]);

  return (
    <div id="bpmn-container" style={{ width: '100%', height: '500px', border: '1px solid #ccc' }}>
      {!bpmnXML && <p className="text-gray-600 text-center mt-4">No BPMN diagram to display.</p>}
    </div>
  );
};

export default WorkflowViewer;
