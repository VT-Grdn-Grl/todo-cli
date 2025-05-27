
import React, { useState } from 'react';
import UniversalButton from '@/components/ui/UniversalButton';
import UniversalText from '@/components/ui/UniversalText';
import UniversalView from '@/components/ui/UniversalView';
import { Trash2 } from 'lucide-react';
import { Task } from '@/types/task';
import DeleteConfirmDialog from '@/components/DeleteConfirmDialog';
import { toast } from '@/hooks/use-toast';

interface TaskItemProps {
  task: Task;
  index: number;
  onDelete: (id: string) => void;
}

const TaskItem = ({ task, index, onDelete }: TaskItemProps) => {
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = () => {
    setIsDeleting(true);
    
    setTimeout(() => {
      onDelete(task.id);
      setShowDeleteDialog(false);
      setIsDeleting(false);
      
      toast({
        title: "Task deleted",
        description: "Task has been removed successfully",
      });
    }, 300);
  };

  const handleDeletePress = () => {
    setShowDeleteDialog(true);
  };

  return (
    <>
      <UniversalView
        variant="card"
        padding="md"
        style="border-2 border-transparent hover:border-gray-200 transition-all hover:shadow-sm animate-fade-in group"
        testID="task-item"
      >
        <UniversalView variant="row" style="gap-4">
          <UniversalView style="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
            <UniversalText variant="caption" weight="semibold" color="default">
              {index}
            </UniversalText>
          </UniversalView>
          
          <UniversalView variant="column" style="flex-1 min-w-0">
            <UniversalText variant="body" weight="medium" testID="task-description">
              {task.description}
            </UniversalText>
            <UniversalText variant="caption" color="muted" style="mt-1">
              Added {new Date(task.createdAt).toLocaleDateString()}
            </UniversalText>
          </UniversalView>
          
          <UniversalButton
            variant="ghost"
            onPress={handleDeletePress}
            title=""
            disabled={isDeleting}
            icon={<Trash2 className="w-4 h-4" />}
            testID="delete-task-button"
          />
        </UniversalView>
      </UniversalView>

      <DeleteConfirmDialog
        open={showDeleteDialog}
        onOpenChange={setShowDeleteDialog}
        onConfirm={handleDelete}
        taskDescription={task.description}
        isDeleting={isDeleting}
      />
    </>
  );
};

export default TaskItem;
