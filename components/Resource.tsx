import React from 'react';
import { Resource as ResourceType } from '../types/index';

interface ResourceProps {
  resource: ResourceType;
}

const Resource: React.FC<ResourceProps> = ({ resource }) => {
  return (
    <div id="resource" className="resource">
      <h3>{resource.name}</h3>
    </div>
  );
};

export default Resource;