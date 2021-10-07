import { AppRootProps } from '@grafana/data';
import React, { FC } from 'react';
import { Input, Button } from '@grafana/ui';

export const A: FC<AppRootProps> = ({ query, path, meta }) => {
  return (
    <div>
      <h1>Sample Form</h1>

      <div style={{ marginBottom: 20 }}>
        <Button>Button 1</Button>
      </div>

      <div style={{ marginBottom: 20 }}>
        <Button>Button 2</Button>
      </div>

      <div style={{ marginBottom: 20 }}>
        <Button>Button 3</Button>
      </div>
      <div style={{ marginBottom: 20 }}>
        <Input placeholder="Enter Text 1" />
      </div>
      <div style={{ marginBottom: 20 }}>
        <Input placeholder="Enter Text 2" />
      </div>
    </div>
  );
};
