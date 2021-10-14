// ======================== react =========================
import * as React from 'react';
// ======================== styles ========================
import { Form, FormInstance, Input } from 'antd';

type EditableRowProps = {
	index: number;
};

interface Item {
	key: string;
	name: string;
	age: string;
	address: string;
}

interface EditableCellProps {
	title: React.ReactNode;
	editable: boolean;
	children: React.ReactNode;
	dataIndex: keyof Item;
	record: Item;
	handleSave: (record: Item) => void;
}
// editable cells
const EditableContext = React.createContext<FormInstance<any> | null>(null);

const EditableRow: React.FC<EditableRowProps> = ({ index, ...props }) => {
	const [form] = Form.useForm();
	return (
		<Form form={form} component={false}>
			<EditableContext.Provider value={form}>
				<tr {...props} />
			</EditableContext.Provider>
		</Form>
	);
};

const EditableCell: React.FC<EditableCellProps> = ({
	title,
	editable,
	children,
	dataIndex,
	record,
	handleSave,
	...restProps
}) => {
	const [editing, setEditing] = React.useState(false);
	const inputRef = React.useRef<Input>(null);
	const form = React.useContext(EditableContext)!;
	React.useEffect(() => {
		if (editing) inputRef.current!.focus();
	}, [editing]);

	const toggleEdit = () => {
		setEditing(!editing);
		form.setFieldsValue({ [dataIndex]: record[dataIndex] });
	};

	const save = async () => {
		try {
			const values = await form.validateFields();
			toggleEdit();
			handleSave({ ...record, ...values });
		} catch (errInfo) {
			console.log('Save failed:', errInfo);
		}
	};

	let childNode = children;

	if (editable) {
		childNode = editing ? (
			<Form.Item
				name={dataIndex}
				style={{ margin: 0 }}
				rules={[{ required: true, message: `${title} is required.` }]}>
				<Input ref={inputRef} onPressEnter={save} onBlur={save} />
			</Form.Item>
		) : (
			<div
				className="editable-cell-value-wrap"
				style={{ paddingRight: 24 }}
				onClick={toggleEdit}>
				{children}
			</div>
		);
	}

	return <td {...restProps}>{childNode}</td>;
};

export { EditableCell, EditableRow };
