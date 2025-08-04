import * as React from 'react';

const EmailTemplate = ({ item, name, number, email, memo }: any) => (
    <div style={{
        fontFamily: 'Arial, sans-serif',
        maxWidth: '600px',
        margin: '0 auto',
        backgroundColor: '#ffffff',
        borderRadius: '8px',
        overflow: 'hidden',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
    }}>
        {/* Header */}
        <div style={{
            backgroundColor: '#1e40af',
            color: '#ffffff',
            padding: '30px 20px',
            textAlign: 'center'
        }}>
            <h1 style={{
                margin: '0',
                fontSize: '28px',
                fontWeight: 'bold'
            }}>
                Boats and Fun Seafood Order
            </h1>
            <p style={{
                margin: '10px 0 0 0',
                fontSize: '16px',
                opacity: '0.9'
            }}>
                Fresh Seafood Delivery
            </p>
        </div>

        {/* Order Details */}
        <div style={{ padding: '30px 20px' }}>
            <h2 style={{
                color: '#1e40af',
                fontSize: '20px',
                marginBottom: '20px',
                borderBottom: '2px solid #e5e7eb',
                paddingBottom: '10px'
            }}>
                Order Details
            </h2>

            {/* Customer Information */}
            <div style={{
                backgroundColor: '#f8fafc',
                padding: '20px',
                borderRadius: '6px',
                marginBottom: '25px'
            }}>
                <h3 style={{
                    color: '#374151',
                    fontSize: '16px',
                    margin: '0 0 15px 0'
                }}>
                    Customer Information
                </h3>
                <div style={{ display: 'grid', gap: '8px' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <span style={{ fontWeight: 'bold', minWidth: '80px', color: '#6b7280' }}>Name:</span>
                        <span style={{ color: '#111827' }}>{name}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <span style={{ fontWeight: 'bold', minWidth: '80px', color: '#6b7280' }}>Phone:</span>
                        <span style={{ color: '#111827' }}>{number}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <span style={{ fontWeight: 'bold', minWidth: '80px', color: '#6b7280' }}>Email:</span>
                        <span style={{ color: '#111827' }}>{email}</span>
                    </div>
                </div>
            </div>

            {/* Order Items */}
            <div style={{
                backgroundColor: '#f8fafc',
                padding: '20px',
                borderRadius: '6px',
                marginBottom: '25px'
            }}>
                <h3 style={{
                    color: '#374151',
                    fontSize: '16px',
                    margin: '0 0 15px 0'
                }}>
                    Items
                </h3>
                <div style={{
                    backgroundColor: '#ffffff',
                    padding: '15px',
                    borderRadius: '4px',
                    border: '1px solid #e5e7eb'
                }}>
                    {Array.isArray(item) ? (
                        <div style={{ 
                            display: 'flex', 
                            flexDirection: 'column', 
                            gap: '10px',
                            width: '100%'
                        }}>
                            {item.map((product, index) => (
                                <div key={index} style={{
                                    padding: '12px 16px',
                                    backgroundColor: '#ffffff',
                                    borderRadius: '8px',
                                    border: '1px solid #e5e7eb',
                                    width: '100%',
                                    boxSizing: 'border-box'
                                }}>
                                    <span style={{
                                        fontSize: '15px',
                                        lineHeight: '1.5',
                                        color: '#374151',
                                        fontWeight: '500',
                                        display: 'block',
                                        wordWrap: 'break-word',
                                        overflowWrap: 'break-word'
                                    }}>
                                        {product.trim()}
                                    </span>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div style={{ 
                            display: 'flex', 
                            flexDirection: 'column', 
                            gap: '10px',
                            width: '100%'
                        }}>
                            {item.split(';').filter((item: string) => item.trim()).map((product: string, index: number) => (
                                <div key={index} style={{
                                    padding: '12px 16px',
                                    backgroundColor: '#f3f4f6',
                                    borderRadius: '8px',
                                    border: '1px solid #e5e7eb',
                                    width: '100%',
                                    boxSizing: 'border-box'
                                }}>
                                    <span style={{
                                        fontSize: '15px',
                                        lineHeight: '1.5',
                                        color: '#374151',
                                        fontWeight: '500',
                                        display: 'block',
                                        wordWrap: 'break-word',
                                        overflowWrap: 'break-word'
                                    }}>
                                        {product.trim()}
                                    </span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Special Instructions */}
            {memo && (
                <div style={{
                    backgroundColor: '#fef3c7',
                    padding: '20px',
                    borderRadius: '6px',
                    marginBottom: '25px',
                    border: '1px solid #f59e0b'
                }}>
                    <h3 style={{
                        color: '#92400e',
                        fontSize: '16px',
                        margin: '0 0 15px 0'
                    }}>
                        Notes:
                    </h3>
                    <p style={{
                        margin: '0',
                        fontSize: '14px',
                        lineHeight: '1.6',
                        color: '#92400e'
                    }}>
                        {memo}
                    </p>
                </div>
            )}

            {/* Footer */}
            <div style={{
                backgroundColor: '#f3f4f6',
                padding: '20px',
                borderRadius: '6px',
                textAlign: 'center'
            }}>
                <p style={{
                    margin: '0 0 10px 0',
                    fontSize: '14px',
                    color: '#6b7280'
                }}>
                    Thank you for choosing Boats and Fun!
                </p>
                <p style={{
                    margin: '0',
                    fontSize: '12px',
                    color: '#9ca3af'
                }}>
                    We&apos;ll contact you shortly to confirm your order and discuss delivery details.
                </p>
            </div>
        </div>
    </div>
);

export default EmailTemplate;
